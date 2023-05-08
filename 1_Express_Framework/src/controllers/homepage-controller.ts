import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { successResponseHandler } from "../middleware/success-response-handler";

import logger from "./../utils/logger";
// import { addBrandInfo, updateBrandInfo } from "../services/brand-service";
// import { getDefaultSelectedPartnerId, getDefaultSelectedCompanyId } from "../services/auth-service";

//Pass the validated info to Service

const AirbnbSchema = new mongoose.Schema(
    {
        name: {
            type: String,
          
        }
    }
);

  
// const Blog = mongoose.model("listingsAndReviews", BlogSchema);

export const getInfo = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        logger.info(`API is hit`);
        var Airbnb = mongoose.model('listingsAndReviews',AirbnbSchema);
        let data  = await  Airbnb.find({});
        
        await successResponseHandler(res, 201, "Information fetched successfully!","data", data);
    } catch (err: any) {
        next(err); 
    }
};
