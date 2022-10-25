import express from "express";
import { waste } from "../fake-data/waste";
import responseFns from "../functions/response-fns";

const getWaste = (request, response) => {
  responseFns.sendOkJson(waste)(response);
};

const wasteRouter = express.Router();

wasteRouter
  .get("/waste", getWaste);

export default wasteRouter;
