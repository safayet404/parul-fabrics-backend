const asyncHandler = require('express-async-handler')
const Balance = require('../models/balanceModel')

const createBalance = asyncHandler(async(req,res)=>{
    try{
        const balance = await Balance.create(req.body)
        res.json(balance)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllBalance = asyncHandler(async(req,res)=>{
    try{
        const allBalance = await Balance.find().sort({_id : - 1});
        res.json(allBalance)
    }catch(error)
    {
        throw new Error(error)

    }
})

const getSingleBalance = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try{
        const singleBalance = await Balance.findById(id).sort({_id : - 1});
        res.json(singleBalance)

    }catch(error)
    {
        throw new Error(error)
    }
})

const updateBalance = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try{
        const update = await Balance.findByIdAndUpdate(id,req.body,{new:true})
        res.json(update)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteBalance = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try{
        const balanceDelete = await Balance.findByIdAndDelete(id)
        res.json(balanceDelete)
    }
    catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createBalance,
    getAllBalance,
    getSingleBalance,
    updateBalance,
    deleteBalance
}
