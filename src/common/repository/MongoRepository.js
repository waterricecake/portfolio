import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  const path = getPath();
  console.log(path);
  mongoose
    .connect(getPath(), {
      dbName: `${process.env.MONGO_DB}`,
    })
    .then((connection) => {
      console.log(getConnectedMessage(connection.connections[0]));
    })
    .catch((err) => {
      console.error('Connection failed\n', err);
    });
};

const getPath = () => {
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

export default connect;
