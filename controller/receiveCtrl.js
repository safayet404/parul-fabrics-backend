const asyncHandler = require('express-async-handler')
const Receive = require("../models/receiveModel")

const createReceiveData = asyncHandler(async(req,res)=>{

    try{
        const receiveData = await Receive.create(req.body)

        res.json({
            status : "Success",
            receiveData
        })

    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllReceiveData = asyncHandler(async(req,res)=>{
    try{
        const getReceiveData = await Receive.find().sort({_id : - 1});
        res.json(getReceiveData)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleReceiveData = asyncHandler(async(req,res)=>{
    try{

        const {id} = req.params
        const singleData = await Receive.find({customerId : id}).sort({_id : - 1});
        res.json(singleData)
    }catch(error)
    {
        throw new Error(error)
    }
})
const getSingleRcvById = asyncHandler(async(req,res)=>{
    try{

        const {id} = req.params
        const singleData = await Receive.findById(id).sort({_id : - 1});
        res.json(singleData)
    }catch(error)
    {
        throw new Error(error)
    }
})
const updateSingleReceiveData = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const updateData = await Receive.findByIdAndUpdate(id, req.body,{new :true})
        res.json(updateData)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteSingleReceiveData = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const deleteData = await Receive.findByIdAndDelete(id)
        res.json(deleteData)
    }catch(error)
    {
        throw new Error(error)
    }
})
module.exports ={
    createReceiveData,
    getAllReceiveData,
    getSingleReceiveData,
    updateSingleReceiveData,
    deleteSingleReceiveData,
    getSingleRcvById
}
