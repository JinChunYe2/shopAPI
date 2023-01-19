// 引入项目配置
const { APP_PORT } = require("./config/config.default.js");

const app = require("./app/index");

app.listen(APP_PORT, () => {
  console.log(`is server http://127.0.0.1:${APP_PORT}`);
});
