const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型（Model user -> users）
const User = seq.define('user',
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: '用户名，唯一'
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '密码'
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: '是否为管理员；0表示不是管理员（默认），1表示是管理员'
    }
  },
  // {
  //   timestamps: false
  // }
)

// 通过执行这个文件手动创建该数据表，平时这句话需要注释掉
// User.sync({ force: true })

module.exports = User