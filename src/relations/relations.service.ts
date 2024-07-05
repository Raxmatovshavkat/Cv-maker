import { Injectable } from '@nestjs/common';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Relation } from './entities/relation.entity';

@Injectable()
export class RelationsService {
  constructor(@InjectModel('relations') private readonly relationService:Model<Relation>){}

  async create(createrelationDto: CreateRelationDto) {
    return await new this.relationService(createrelationDto).save();
  }

  async findAll() {
    return await this.relationService.find();
  }

  async findOne(id: string) {
    return await this.relationService.findById(id);
  }

  async update(id: string, updaterelationDto: UpdateRelationDto) {
    return await this.relationService.findByIdAndUpdate(id, updaterelationDto);
  }

  async remove(id: string) {
    return await this.relationService.findByIdAndUpdate(id);
  }
}
