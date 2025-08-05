const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc Login user
//@route POST /api/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc Current user
//@route POST /api/current
//@access private 
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
