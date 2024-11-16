import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv';

dotenv.config();
let mongoServer;

const connect = async () => {
  const node_env = process.env.NODE_ENV;
  const path = await getUri(node_env);
  console.log(`Try connect to ${node_env} : ${path}`);
  mongoose
    .connect(path, {
      dbName: `${process.env.MONGO_DB}`,
    })
    .then((connection) => {
      console.log(getConnectedMessage(connection.connections[0]));
    })
    .catch((err) => {
      console.error('Connection failed\n', err);
    });
};

const close = async () => {
  if (mongoServer) {
    await mongoServer.stop();
  }
  await mongoose.connection.close();
};

const getUri = async (env) => {
  if (env === 'production') {
    return getProductUri();
  }
  return getInmemoryUri();
};

const getInmemoryUri = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  const connection = await mongoose.createConnection(uri).asPromise();

  const adminDb = connection.db;
  await adminDb.command({
    createUser: 'rootuser',
    pwd: 'rootpass',
    roles: [{ role: 'readWrite', db: 'portfolio' }],
  });
  connection.close();
  return mongoServer.getUri();
};

const getProductUri = async () => {
  const id = process.env.MONGO_USER_ID;
  const password = process.env.MONGO_PASS;
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  const db = process.env.MONGO_DB;
  return `mongodb://${id}:${password}@${host}:${port}/${db}?authSource=admin`;
};

const getConnectedMessage = (connections) => {
  return `Connect Success\nname : ${connections.name}\nhost : ${
    connections.host
  }\nport : ${connections.port}\nstaus: ${getStatusLog(
    connections.readyState,
  )}`;
};

const getStatusLog = (status) => {
  if (status === 1) {
    return 'Connected';
  }
  return 'Not Connected';
};

export { connect, close };
