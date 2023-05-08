// mongodb+srv://icte:<password>@icte.6go4qoz.mongodb.net/?retryWrites=true&w=majority

import mongoose, { ConnectOptions } from "mongoose";
import config from "config";

import logger from "../utils/logger";

const createDBConnection = async () => { 

    // const NODE_ENV = config.get<string>("NODE_ENV");
    // const MONGO_USER = config.get<string>("MONGO_USER");
    // const MONGO_PASSWORD = config.get<string>("MONGO_PASSWORD");
    // const MONGO_CLUSTER = config.get<string>("MONGO_CLUSTER");
    // const MONGO_DB_NAME = config.get<string>("MONGO_DB_NAME");
    // const MONGO_PORT = config.get<number>("MONGO_PORT");

    // const mongoConnectionUri = `mongodb+srv://icte:icte@icte.6go4qoz.mongodb.net/?retryWrites=true&w=majority`;
    const mongoDbConnectionURI = `mongodb+srv://icte:icte@icte.6go4qoz.mongodb.net/sample_airbnb?retryWrites=true&w=majority`;

    try {
        
      await mongoose.connect(mongoDbConnectionURI, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);
      logger.info("Successfully connected to database");

    } catch (error) {
        console .log(error)
      logger.error("Could not connect to database");
      process.exit(1);
    }
};

export default createDBConnection;
