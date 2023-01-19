class Controller {
  async register(ctx, next) {
    ctx.body = "这是用户页面";
  }
  async login(ctx, next) {
    ctx.body = "用户登陆";
  }
}

module.exports = new Controller();
