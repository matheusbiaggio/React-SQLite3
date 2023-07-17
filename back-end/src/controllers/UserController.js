const UserService = require('../services/UserService');

class UserController {
  async getAllUsers(_req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createUser(req, res) {
    const { name, email } = req.body;
    try {
      await UserService.createUser(name, email);
      res.status(201).json({ message: 'User Created Successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    try {
      await UserService.deleteUser(id);
      res.status(200).json({ message: 'Successfully Deleted User' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();
