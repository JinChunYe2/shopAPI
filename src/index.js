const Koa = require("koa");

const app = new Koa();

const { APP_PORT } = require("./config/config.default.js");

app.use((ctx) => {
  ctx.body = "hello world";
});

app.listen(APP_PORT, () => {
  console.log(`is server http://127.0.0.1:${APP_PORT}`);
});
