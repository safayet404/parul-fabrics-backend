const express = require("express")
const { createClearance, updateClearance, deleteClearance, getSingleClearance, getClearance } = require("../controller/clearanceCtrl")

const router = express.Router()

router.post("/create-factory",createClearance)
router.put("/update-factory/:id",updateClearance)
router.delete("/delete-factory/:id",deleteClearance)
router.get("/get-single-factory/:id",getSingleClearance)
router.get("/get-all-factory",getClearance)


module.exports = router