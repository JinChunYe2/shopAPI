const { createUser } = require("../service/user.service");
class Controller {
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, password } = ctx.request.body;
    // 2.写入数据库
    const res = await createUser(user_name, password);
    // 3.返回结果
    ctx.body = res;
  }
  async login(ctx, next) {
    ctx.body = "用户登陆";
  }
}

module.exports = new Controller();
