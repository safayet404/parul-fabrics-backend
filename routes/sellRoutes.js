const express = require("express")
const { addSell, getSellDetails, getSellSingleDetails, updateSellDetails, deleteSellData, getSingleSellById } = require("../controller/sellCtrl")
const router = express.Router()

router.post("/add-sell",addSell)
router.get("/sell-all-details",getSellDetails)
router.get("/sell-single-details/:id",getSellSingleDetails)
router.get("/sell-by-id/:id",getSingleSellById)
router.put("/update-sell-details/:id",updateSellDetails)
router.delete("/delete-sell-data/:id",deleteSellData)




module.exports = router