'use strict'

const Database = use('Database');
const User = use('App/Models/User');
const Hash = use('Hash');

class UserController {
  async index ({response}) {
    let users = await User.all();
    return response.json({ users: users });
  }

  async show()  {
  }

  async show () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = UserController
