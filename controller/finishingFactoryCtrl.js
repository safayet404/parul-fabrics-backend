const Factory = require("../models/factoryModel")
const asyncHandler = require("express-async-handler")


const createFactory = asyncHandler(async (req, res) => {
  try {
    const newFactory = await Factory.create(req.body);

    res.json(newFactory);
  } catch (error) {
    throw new Error(error);
  }
});

const updateFactory = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        const updateFactory = await Factory.findByIdAndUpdate(id,req.body,{
            new : true
        })
        res.json(updateFactory)
    }catch (error) {
        throw new Error(error)
    }
})

const getAllFactory = asyncHandler(async(req,res)=>{

    try {
        const getFactory = await Factory.find()
        res.json(getFactory)

    }catch (error) {
        throw new Error(error)
    }
})
const getSingleFactory = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        const singleFactory = await Factory.findById(id)
        res.json(singleFactory)

    }catch (error) {
        throw new Error(error)
    }
})
const deleteSingleFactory = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        const factory = await Factory.findById(id)
       if(factory)
       {
        const deleteFactory = await Factory.findByIdAndDelete(id)
        res.json({status : "deleted",deleteFactory})
       }
       else
       {
        res.json({status : "Entity not found"})
       }


    }catch (error) {
        throw new Error(error)
    }
})

module.exports ={createFactory,getAllFactory,getSingleFactory,updateFactory,deleteSingleFactory}

