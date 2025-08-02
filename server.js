const dotenv=require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/errorHandler");



const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

const connectDb = require("./config/dbConnection");
connectDb();


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
