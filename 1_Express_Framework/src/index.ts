import express, { Express} from 'express';

import cors from "cors";
import config from "config";

import dbConnection from "./db-connection/db-connection";
import logger from "./utils/logger";
import router from "./routes/index";

// import { errorHandler } from "./middleware/error-handler";

const app : Express = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(helmet());

dbConnection();

app.use(router);

const port = 3001 ;
app.listen(port, async () => {
   
    logger.info(`Application successfully connected on http://localhost:${port}`);
});
