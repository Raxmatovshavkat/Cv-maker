import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './interface/log.interface';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class LogService {
  constructor(@InjectModel('Log') private readonly logModel: Model<Log>) { }

  async create(createLogDto: CreateLogDto): Promise<Log> {
    const createdLog = new this.logModel(createLogDto);
    return createdLog.save();
  }
}
