const Color = require("../models/colorModel")
const asyncHandler = require("express-async-handler")

const CreateColor = asyncHandler(async(req,res)=>{
    try {
        const newColor = await Color.create(req.body)
        res.json({
            status : "Success",
            newColor
        })

    }catch (error) {
        throw new Error(error)
    }
})

const getAllColor = asyncHandler(async(req,res)=>{
    try {
        const allColor = await Color.find()
        res.json(allColor)
    }catch (error) {
        throw new Error(error)
    }
})

const getSingleColor = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        const getColor = await Color.findById(id)
        res.json(getColor)

    }catch (error) {
        throw new Error(error)
    }
})

const deleteSingleColor = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        const deleteColor = await Color.findByIdAndDelete(id)
        res.json(deleteColor)

    }catch (error) {
        throw new Error(error)
    }
})
const updateSingleColor = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        const updateColor = await Color.findByIdAndUpdate(id,req.body,{
            new : true
        })
        res.json(updateColor)
    }catch (error) {
        throw new Error(error)
    }
})


module.exports = {CreateColor,getAllColor,getSingleColor,updateSingleColor,deleteSingleColor}

/**
 * 
 * try {

    }catch (error) {
        throw new Error(error)
    }
 */