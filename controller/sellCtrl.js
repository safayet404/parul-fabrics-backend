const asyncHandler = require("express-async-handler");
const Customer = require("../models/customerModel");
const Sell = require("../models/sellModel");

const addSell = asyncHandler(async (req, res) => {
  // try {
  //     const newColor = await Sell.create(req.body)
  //     res.json({
  //         status : "Success",
  //         newColor
  //     })

  // }catch (error) {
  //     throw new Error(error)
  // }
  const { price, customerId, quantity, description, date } = req.body;
  try {
    const customerName = await Customer.findById(customerId).name
    let newSell = await new Sell({
      customerId,
      quantity,
      price,
      description,
      totalPrice: quantity * price,
      date,
      name : customerName
    }).save();
    res.json(newSell);
  } catch (error) {
    throw new Error(error);
  }
});

const getSellDetails = asyncHandler(async (req, res) => {
  try {
    const sellDetails = await Sell.find().populate(['customerId','description']).sort({_id : - 1});

    res.json(sellDetails);
  } catch (error) {
    throw new Error(error);
  }
});

const getSellSingleDetails = asyncHandler(async (req, res) => {
  try {
    const {id} = req.params
   
    const sellSingleDetails = await Sell.find({customerId : id}).populate('description')
    
   
    res.json(sellSingleDetails);
  } catch (error) {
    throw new Error(error);
  }
});
const getSingleSellById = asyncHandler(async (req, res) => {
  try {
    const {id} = req.params
   
    const sellSingleDetails = await Sell.findById(id)
    
   
    res.json(sellSingleDetails);
  } catch (error) {
    throw new Error(error);
  }
});

const updateSellDetails = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updateSellDetails = await Sell.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(
    
      updateSellDetails
    );
  } catch (error) {
    throw new Error(error);
  }
});

const deleteSellData = asyncHandler(async (req, res) => {
    const {id} = req.params
    try{

        const deleteSellData = await Sell.findByIdAndDelete(id)
        res.json(deleteSellData)
    }catch(error)
    {
        throw new Error(error)
    }
});


module.exports = {
  addSell,
  getSellDetails,
  getSellSingleDetails,
  deleteSellData,
  updateSellDetails,
  getSingleSellById
};
