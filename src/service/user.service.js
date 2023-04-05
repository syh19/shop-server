class UserService {
  async createUser(user_name, password) {
    // #TODO 写入数据库的逻辑
    return '写入成功'
  }
}

module.exports = new UserService()