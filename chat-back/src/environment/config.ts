export const environment = {
  dataBase: {
    mySql: {
      host: 'localhost',
      port: 32769,
      name: 'default',
      username: 'edwin',
      password: '123456',
      database: 'test',
      synchronize: false,
      dropSchema: false,

    },
    mongoDb: {
      uri: 'mongodb://localhost:32768/test',
    },
  },
  port: 8080,
};
