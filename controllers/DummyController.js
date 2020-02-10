const { Dummy } = require('../models');

class DummyController {
  static findAll(req, res) {
    console.log('tereksekusi');
    Dummy.findAll()
      .then(dummies => {
        res.status(200).json({ data: dummies })
      })
      .catch(err => {
        res.status(400).json(err);
      })
  }
}

module.exports = DummyController;