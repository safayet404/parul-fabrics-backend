const express = require("express")
const { createBill, updateBill, deleteBill, getSingleBill, getBills } = require("../controller/billCtrl")
const router = express.Router()


router.post("/create-factory",createBill)
router.put("/update-factory/:id",updateBill)
router.delete("/delete-factory/:id",deleteBill)
router.get("/get-single-factory/:id",getSingleBill)
router.get("/get-all-factory",getBills)



module.exports = router