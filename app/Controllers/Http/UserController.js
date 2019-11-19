"use strict";

const User = use('App/Models/User')

class UserController {
  index() {
    //
    const users = await User.all();

    return users;
  }
}

module.exports = UserController;
