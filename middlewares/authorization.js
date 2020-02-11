const { Kanban } = require('../models');

module.exports = function (req, res, next) {
  const { id } = req.params;
  Kanban.findOne({
    where: { id }
  })
    .then(data => {
      if (data) {
        if (data.UserId === req.currentUserId) {
          next();
        } else {
          next({ name: 'Unauthorized' });
        }
      } else {
        next({ name: 'Unauthorized' });
      }
    })
    .catch(next)
}