import express from "express";
import authSeller from "../middlewares/authSeller.js";
import {
  getAllOrders,
  getUserOrders,
  placeOderCOD,
  placeOderStripe,
} from "../controllers/order.controller.js";
import authUser from "../middlewares/authUser.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOderCOD);
orderRouter.post("/stripe", authUser, placeOderStripe);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, getAllOrders);

export default orderRouter;
