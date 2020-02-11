const { Kanban } = require('../models');

module.exports = function (req, res, next) {
  const { id } = req.params;
  Kanban.findOne({
    where: { id }
  })
    .then(data => {
      console.log(data);
      if (data) {
        if (data.UserId === req.currentUserId) {
          next();
        } else {
          next({ name: 'Unauthorized' });
        }
      } else {
        next({ status: 400, message: 'Kanban task does not exist' });
      }
    })
    .catch(next)
}