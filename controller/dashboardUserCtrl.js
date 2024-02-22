const asyncHandler = require("express-async-handler");
const DashboardUser = require("../models/dashboardUser");

const addUser = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body.email;
    const findUser = await DashboardUser.findOne({ email: email });

    if (!findUser) {
      const newUser = await DashboardUser.create(req.body);
      res.json(newUser);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const allUsers = asyncHandler(async(req,res)=>{
    try{
        const allUsers = await DashboardUser.find()
        res.json(allUsers)
    }catch(error)
    {
        throw new Error(error)
    }
})

const singleUser = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const user = await DashboardUser.findById(id)
        res.json(user)
    }catch(error)
    {
        throw new Error(error)
    }
})

const userUpdate = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const update = await DashboardUser.findByIdAndUpdate(id,req.body,{new:true})
        res.json(update)
    }catch(error)
    {
        throw new Error(error)
    }

})

const userDelete = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const userDlt = await DashboardUser.findByIdAndDelete(id)
        res.json(userDlt)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    addUser,
    allUsers,
    singleUser,
    userUpdate,
    userDelete
}