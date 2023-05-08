import { Injectable } from '@nestjs/common';
import mongoose from "mongoose";
@Injectable()
export class AppService {
 async getHomepage(): Promise<any> {

    
    const AirbnbSchema = new mongoose.Schema(
      {
          name: {
              type: String,
            
          }
      }
  );
  var Airbnb = mongoose.model('listingsAndReviews',AirbnbSchema);
    let data  = await  Airbnb.find({});
    return {"status": "sucess","statusCode":200, "data": data};
  }
}
