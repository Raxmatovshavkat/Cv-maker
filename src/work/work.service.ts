import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Work } from './entities/work.entity';

@Injectable()
export class WorkService {
  constructor(@InjectModel('works') private readonly workService:Model<Work>){}
  async create(createworkDto: CreateWorkDto) {
    return await new this.workService(createworkDto).save();
  }

  async findAll() {
    return await this.workService.find();
  }

  async findOne(id: string) {
    return await this.workService.findById(id);
  }

  async update(id: string, updateworkDto: UpdateWorkDto) {
    return await this.workService.findByIdAndUpdate(id, updateworkDto);
  }

  async remove(id: string) {
    return await this.workService.findByIdAndUpdate(id);
  }
}
