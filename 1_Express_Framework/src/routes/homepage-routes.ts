import express from "@awaitjs/express";
import config from "config";



import { getInfo } from "../controllers/homepage-controller";

const homepageRoute = express.Router();


homepageRoute.getAsync("/get", getInfo);

export default homepageRoute;