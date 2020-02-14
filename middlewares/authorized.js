const {projectUser} = require('../models')


module.exports =
  function (req, res, next) {
    let pk = req.params.id
    console.log('sampe authorized');
    

    
    projectUser.findOne({
      where: {
        ProjectId: pk,
        UserId: req.currentUserId
      }
    })
    .then(data => {
      console.log(req.currentUserId, 'ini masuk');
      console.log(data);
      
        // console.log(data.UserId, 'disini', req.currentUserId);
        // console.log(data.id, 'ini dari authorize');
        
        if (data.UserId == req.currentUserId) {
          next()
        } else {
          res.status(400).json({
            msg: `unauthorized`
          })
        }
      })
      .catch(err => {
        res.status(400).json({
          msg: `data not found`
        })
      })
  }