class UserService {
  async createUser(user_name, passwordd) {
    // todo: 写入数据库
    return "写入数据库成功";
  }
}
module.exports = new UserService();
