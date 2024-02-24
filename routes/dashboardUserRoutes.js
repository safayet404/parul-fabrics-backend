const express = require('express')
const { addUser, allUsers, singleUser, userUpdate, userDelete, singleUserByMail } = require('../controller/dashboardUserCtrl')

const router = express.Router()


router.post("/add-user",addUser)
router.get("/all-user",allUsers)
router.get("/single-user/:id",singleUser)
router.get("/user-mail/:email",singleUserByMail)
router.put("/update-user/:id",userUpdate)
router.delete("/delete-user/:id",userDelete)






module.exports = router