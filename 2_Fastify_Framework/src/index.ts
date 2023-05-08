import fastify from 'fastify'
import cors from "cors";
import config from "config";
import mongoose from "mongoose";
import logger from "./utils/logger";
import dbConnection from "./db-connection/db-connection";
const server = fastify()

dbConnection();

server.get('/homepage', async (request, reply) => {
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
    
   reply.send({"status": "success","statusCode":200, "data": data})
})

const port = 3002
server.listen({ port: port  }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  logger.info(`Application successfully connected on http://localhost:${port}`);
})