import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CreateLogDto } from 'src/log/dto/create-log.dto';
import { LogService } from 'src/log/log.service';

@Injectable()
export class MyMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LogService) { }


  async use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on('finish', async () => {
      const duration = Date.now() - start;

      const log: CreateLogDto = {
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        responseTime: duration,
      };
      await this.loggerService.create(log)
    });
    next();
  }
}
