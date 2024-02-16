const express = require('express')
const { createExpense, getAllExpense, getSingleExpense, updateExpense, deleteExpense } = require('../controller/dailyExpenseCtrl')

const router = express.Router()

router.post("/create-expense",createExpense)
router.get("/get-all-expense",getAllExpense)
router.get("/get-single-expense/:id",getSingleExpense)
router.put("/update-expense/:id",updateExpense)
router.delete("/delete-expense/:id",deleteExpense)

module.exports = router