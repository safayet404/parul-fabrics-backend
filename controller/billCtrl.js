const asyncHandler = require("express-async-handler")
const Bill = require("../models/billModel")

const createBill = asyncHandler(async(req,res)=>{
    try{
        const newBill = await Bill.create(req.body)
        res.json(newBill)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getBills = asyncHandler(async(req,res)=>{
    try{
        const allBills = await Bill.find()
        res.json(allBills)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleBill = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleBill = await Bill.findById(id)
        res.json(singleBill)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateBill = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const update = await Bill.findByIdAndUpdate(id,req.body,{new:true})
        res.json(update)
        
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteBill = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const deleteABill = await Bill.findByIdAndDelete(id)
        res.json(deleteABill)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createBill,
    getBills,
    getSingleBill,
    updateBill,
    deleteBill
}