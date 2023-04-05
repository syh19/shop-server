const UserModel = require('../model/user.model')
class UserService {
  async createUser (user_name, password) {
    const res = await UserModel.create({ user_name, password })
    return res.dataValues
  }
}

module.exports = new UserService()