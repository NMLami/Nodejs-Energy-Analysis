var connect = require("connect");
var app = connect();
import mongoose from "mongoose";
import logger from "./utils/logger";
import dbConnection from "./db-connection/db-connection";

async function homepage(req:any, res:any, next:any) {
    logger.info(`API is hit`);
    const AirbnbSchema = new mongoose.Schema(
        {
            name: {
                type: String,
              
            }
        }
    );

    var Airbnb = mongoose.model('listingsAndReviews',AirbnbSchema);
    let data  = await  Airbnb.find({});
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();

}
dbConnection();

const port = 3004;
app
   .use('/homepage',homepage)
   .listen(port,()=>{
    logger.info(`Application successfully connected on http://localhost:${port}`);
   });
