import express from "express";
const checkoutRouter = express.Router();
import { httpCreateCheckoutSession } from "./checkout.controller";

checkoutRouter.post("/create-checkout-session", httpCreateCheckoutSession);

export {
    checkoutRouter
}
