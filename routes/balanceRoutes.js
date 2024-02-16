const express = require("express")
const { createBalance, getAllBalance, getSingleBalance, updateBalance, deleteBalance } = require("../controller/balanceCtrl")

const router = express.Router()

router.post("/create-balance",createBalance)
router.get("/get-all-balance",getAllBalance)
router.get("/get-single-balance/:id",getSingleBalance)
router.put("/update-balance/:id",updateBalance)
router.delete("/delete-balance/:id",deleteBalance)

module.exports = router