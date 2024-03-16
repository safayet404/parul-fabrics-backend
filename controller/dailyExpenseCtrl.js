const asyncHandler = require('express-async-handler')
const Expense = require('../models/dailyExpense')

const createExpense = asyncHandler(async(req,res)=>{
    try{
        const newExpense = await Expense.create(req.body)
        res.json(newExpense)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllExpense = asyncHandler(async(req,res)=>{
    try{
        const getExpense = await Expense.find().sort({_id : - 1});
        res.json(getExpense)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleExpense = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleExpense = await Expense.findById(id)
        res.json(singleExpense)

    }catch(error)
    {
        throw new Error(error)
    }
})

const updateExpense = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try{
        const update = await Expense.findByIdAndUpdate(id,req.body,{new : true})
        res.json(update)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteExpense = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const deleteExpenseData = await Expense.findByIdAndDelete(id)
        res.json(deleteExpenseData)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createExpense,
    getAllExpense,
    getSingleExpense,
    updateExpense,
    deleteExpense
}
