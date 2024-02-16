const express = require('express')

const router = express.Router()
const {createUser, loginUserCtrl, getAllUser, getSingleUser, deleteSingleUser,loginAdmin, UpdateSingleUser, blockUser, unBlockUser, logout, saveAddress} = require('../controller/userCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')



router.post('/register',createUser)
router.post('/login',loginUserCtrl)
router.post("/admin-login",loginAdmin);
router.get('/all-users',getAllUser)
router.put('/update-user/:id',UpdateSingleUser)
router.get('/get-single-user/:id',getSingleUser)
router.delete('/delete-single-user/:id',deleteSingleUser)


router.put("/save-address", authMiddleware, saveAddress)
router.put('/edit-user/:id',authMiddleware,isAdmin, UpdateSingleUser)
router.put('/block-user/:id',authMiddleware,isAdmin, blockUser)
router.put('/unblock-user/:id',authMiddleware,isAdmin, unBlockUser)


module.exports = router