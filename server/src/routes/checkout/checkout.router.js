const express = require("express");
const checkoutRouter = express.Router();
const { httpCreateCheckoutSession } = require("./checkout.controller");

checkoutRouter.post("/create-checkout-session", httpCreateCheckoutSession);

module.exports = checkoutRouter;
