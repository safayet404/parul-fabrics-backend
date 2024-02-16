const express = require("express")
const { createFactory, updateFactory, deleteSingleFactory, getSingleFactory, getAllFactory } = require("../controller/finishingFactoryCtrl")


const router = express.Router()

router.post("/create-factory",createFactory)
router.put("/update-factory/:id",updateFactory)
router.delete("/delete-factory/:id",deleteSingleFactory)
router.get("/get-single-factory/:id",getSingleFactory)
router.get("/get-all-factory",getAllFactory)


module.exports = router