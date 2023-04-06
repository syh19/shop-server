const UserModel = require('../model/user.model')
class UserService {
  /**
   * 在数据库中新建一个用户
   * @param {string} user_name 用户名
   * @param {string} password 密码
   * @returns 创建的用户信息
   */
  async createUser (user_name, password) {
    const res = await UserModel.create({ user_name, password })
    return res.dataValues
  }

  /**
   * 根据条件查询用户
   * @param {object} param0 查询条件
   * @returns 查询到的用户
   */
  async getUserInfo ({ id, user_name, password, is_admin }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })

    const res = await UserModel.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })

    return res ? res.dataValues : null
  }

}

module.exports = new UserService()