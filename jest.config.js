export default {
  transform: {
    '^.+\\.js$': 'babel-jest', // Babel을 Jest 변환기로 사용
  },
  moduleNameMapper: {
    '^#root/(.*)$': '<rootDir>/$1',
    '^#src/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
};
