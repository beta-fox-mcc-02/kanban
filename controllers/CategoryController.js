const { Category } = require('../models')

class CategoryController {
   static findAll(req, res) {
      Category.findAll() 
         .then(categories => {
            console.log(categories, 'findAll Category then')
            res.status(200).json({
               status : 200,
               msg : "find all category "
            })
         })
         .catch(err => {
            console.log(err, 'findAll Category catch')
         })
   }

   static findOne(req, res) {

   }

   static create(req, res) {

   }

   static update(req, res) {

   }

   static delete(req, res) {

   }
}


module.exports = CategoryController