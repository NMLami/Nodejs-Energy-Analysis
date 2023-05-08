import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dbConnection from "./db-connection/db-connection";
import logger from "./utils/logger";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dbConnection();
  const port = 3003;
  await app.listen(port).then(()=>{
    logger.info(`Application successfully connected on http://localhost:${port}`);
  });
}
bootstrap();
