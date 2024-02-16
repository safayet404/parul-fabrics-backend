const express = require("express")
const { createProduct, getAllProducts, getSingleProduct, deleteSingleProduct, updateProducts } = require("../controller/productCtrl")
const { authMiddleware } = require("../middlewares/authMiddleware")


const router = express.Router()


router.post("/create-product",createProduct)
router.get("/all-products",getAllProducts)
router.get("/single-product/:id",getSingleProduct)
router.put("/update-product/:id", updateProducts);
router.delete("/delete-product/:id",deleteSingleProduct)




module.exports = router