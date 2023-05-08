import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import logger from "./utils/logger";

@Controller('/homepage')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomepage(): Promise<any> {
    logger.info(`API is hit`);
    return this.appService.getHomepage();
  }
}
