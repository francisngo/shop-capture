import express from "express";
import { checkoutRouter } from "./checkout/checkout.router";

const apiRouters = express.Router();
apiRouters.use("/checkout", checkoutRouter);

export default apiRouters;
