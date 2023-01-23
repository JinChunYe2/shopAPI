const { Sequelize } = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config.default");

const sql = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  dialect: "mysql",
  host: MYSQL_HOST,
  port: MYSQL_PORT,
});

sql
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(() => {
    console.log("数据库连接失败");
  });
