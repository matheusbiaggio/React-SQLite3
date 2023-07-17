const User = require('../models/UserModel');

class UserService {
  getAllUsers() {
    return User.getAllUsers();
  }

  createUser(name, email) {
    return User.createUser(name, email);
  }

  deleteUser(id) {
    return User.deleteUser(id);
  }
}

module.exports = new UserService();