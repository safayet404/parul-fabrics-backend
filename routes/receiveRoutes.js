const express = require("express")
const { createReceiveData, getAllReceiveData, getSingleReceiveData, updateSingleReceiveData, deleteSingleReceiveData, getSingleRcvById } = require("../controller/receiveCtrl")
const router = express.Router()

router.post("/add-receive-data",createReceiveData)
router.get("/get-all-receive-data",getAllReceiveData)
router.get("/get-single-receive-data/:id",getSingleReceiveData)
router.get("/receive-by-id/:id",getSingleRcvById)
router.put("/update-single-receive-data/:id",updateSingleReceiveData)
router.delete("/delete-single-receive-data/:id",deleteSingleReceiveData)

module.exports = router

