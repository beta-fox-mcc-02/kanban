const { Category, Task } = require('../models')

class CategoryController {
   static findAll(req, res, next) {
      // console.log('masuk controller')
      const UserId = +req.currentUserId
      // console.log(UserId)
      Category.findAll({
         include: [Task],
         where: { UserId },
         order: [['id', 'ASC']]
      }) 
         .then(categories => {
            // console.log(categories)
            categories = categories.sort((a, b) => a.CategoryId - b.CategoryId)
            // console.log(categories)
            // let start = categories[0].id
            // let end = categories[categories.length-1].id
            // console.log(categories[0].Tasks)
            // console.log(categories[categories.length-1].id, '----------------')
            // console.log(categories, 'findAll Category then')
            // let newCategories = []
            // categories.forEach(cat => {
            //    // console.log(cat)
            //    cat.Tasks.filter(el => {
            //       // console.log(el)
            //       if(el.UserId === UserId) {
            //          newCategories.push(el)
            //       }
            //    })
            // })

            res.status(200).json({
               status : 200,
               categories,
               msg : "success find all category in controller"
            })
         })
         .catch(err => {
            // console.log(err, 'findAll Category catch')
            res.status(400).json({
               status: 400,
               msg : "fail find all category in controller"
            })
         })
   }

   static findOne(req, res) {
      let id = +req.params.id
      Category.findOne({
         where : {
            id
         }
      })
         .then(data => {
            // console.log(data, 'masuk findOne Controller')
            res.status(200).json({
               status : 200,
               data,
               msg : 'success get one controller'
            })
         })
         .catch(err => {
            // console.log(err, 'error findOne controller')
            res.status(400).json({
               status: 400,
               data,
               msg : 'fail get one controller'
            })
         })
   }

   static create(req, res, next) {
      console.log(req.currentUserId)
      let input = { 
         name: req.body.name,
         UserId : +req.currentUserId
      }
      Category.create(input)
         .then(data => {
            // console.log(data, 'success create category')
            res.status(200).json({
               name: data.name,
               msg: 'success create category'
            })
         })
         .catch(err => {
            // console.log(err, 'error create category')  
            res.status(400).json({
               status : 400,
               msg : 'fail create in controller'
            })
         })
   }

   static update(req, res) {
      let id = +req.params.id
      Category.update({
         name : req.body.name
      },{
         where : {
            id
         }
      })
         .then(data => {
            // console.log(data, 'berhasil update')
            res.status(200).json({
               status : 200,
               msg : 'success update category'
            })
         })
         .catch(err => {
            // console.log(err, 'gagal update')
            res.status(400).json({
               status: 400,
               msg : 'fail update category'
            })
         })
   }

   static delete(req, res) {
      let id = +req.params.id
      Task.destroy({
         where: {
            CategoryId : id
         }
      })
         .then(data => {
            // console.log(data)
            Category.destroy({
               where : {
                  id
               }
            })
               .then(data => {
                  // console.log(data, 'success delete category in controller')
                  res.status(200).json({
                     status: 200,
                     msg : 'success delete category'
                  })
               })
               .catch(err => {
                  // console.log(err, 'fail delete category in controller')
                  res.status(400).json({
                     status: 400,
                     msg : 'fail delete category'
                  })
               })
         })
         .catch(err => {
            // console.log(err, 'category controller delete catch')
            res.status(400).json({
              msg: 'fail delete category'
            })
         })

   }
}


module.exports = CategoryController