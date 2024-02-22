const Customer = require("../models/customerModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbid");
const createCustomer = asyncHandler(async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.json({
      status: "Success",
      newCustomer,
    });
  } catch (error) {
    throw new Error();
  }
});

const getAllCustomer = asyncHandler(async (req, res) => {
  try {
  
    const customers = await Customer.find()
    res.json(customers);
  } catch (error) {
    throw new Error(error);
  }
});

const getSingleCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const getACustomer = await Customer.findById(id);
    res.json(getACustomer);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteSingleCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const deleteCustomer = await Customer.findByIdAndDelete(id);
    res.json({
      status: "This Customer Information has been deleted",
      deleteCustomer,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateSingleCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      status: "Information Updated",
      updateCustomer,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCustomer,
  getAllCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
  getSingleCustomer,
};
