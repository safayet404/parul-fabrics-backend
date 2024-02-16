const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const allProduct = await Product.find()
    res.json(allProduct)
  } catch (error) {
    throw new Error(error);
  }
});

const getSingleProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

const updateProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const update = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ status: "This Product Information is Updated", update });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteSingleProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);

    res.json({ status: "This Product is Deleted", deleteProduct });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateProducts,
};
