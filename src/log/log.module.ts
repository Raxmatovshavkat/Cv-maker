import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './entities/log.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  providers: [LogService],
  exports: [LogService]
})
export class LogModule { }
