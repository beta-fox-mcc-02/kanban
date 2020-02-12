const router = require("express").Router()
const taskController = require("../controllers/taskController")
const {
    authentication
} = require("../middlewares/authentication")

router.use(authentication)

router.get("/task", taskController.findAll)

router.post("/create", taskController.create)

router.delete("/delete/:id", taskController.delete)

router.get("/update/:id", taskController.findOne)

router.put("/update/:id", taskController.update)

module.exports = router