const asyncHandler = require("express-async-handler")
const Clearance = require("../models/clearanceModel")

const createClearance = asyncHandler(async(req,res)=>{
    try{
        const newClearance = await Clearance.create(req.body)
        res.json(newClearance)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getClearance = asyncHandler(async(req,res)=>{
    try{
        const allClearance = await Clearance.find()
        res.json(allClearance)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleClearance = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleClearance = await Clearance.findById(id)
        res.json(singleClearance)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateClearance = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const update = await Clearance.findByIdAndUpdate(id,req.body,{new:true})
        res.json(update)
        
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteClearance = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const deleteAClearance = await Clearance.findByIdAndDelete(id)
        res.json(deleteAClearance)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
   createClearance,
   getClearance,
   getSingleClearance,
   updateClearance,
   deleteClearance
}