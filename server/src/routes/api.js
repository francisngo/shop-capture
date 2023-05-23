const express = require("express");
const checkoutRouter = require("./checkout/checkout.router");

const api = express.Router();
api.use("/checkout", checkoutRouter);

module.exports = api;
