const express = require("express")
const { createCustomer, getAllCustomer, getSingleCustomer, updateSingleCustomer, deleteSingleCustomer, addSell } = require("../controller/customerCtrl")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post("/create-customer",createCustomer)
router.get("/get-all-customers",getAllCustomer)
router.get("/get-single-customer/:id",getSingleCustomer)
router.put("/update-customer/:id",updateSingleCustomer)
router.delete("/delete-customer/:id",deleteSingleCustomer)


// Sell






module.exports = router