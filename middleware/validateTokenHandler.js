const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("No token provided or malformed header");
  }

  const token = authHeader.split(" ")[1];
  if (!process.env.JWT_SECRET) {
    res.status(500);
    throw new Error("JWT secret not configured");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // attach user payload
    next();
  } catch (err) {
    res.status(401);
    throw new Error("User is not authorized - token failed");
  }
});

module.exports = validateToken;
