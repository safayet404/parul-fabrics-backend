const express = require("express")
const {CreateColor,getAllColor,getSingleColor,updateSingleColor,deleteSingleColor} = require("../controller/colorCtrl")
const router = express.Router()

router.post("/",CreateColor)
router.get("/",getAllColor)
router.get("/single-color/:id",getSingleColor)
router.delete("/delete-color/:id",deleteSingleColor)
router.put("/update-color/:id",updateSingleColor)

module.exports = router
