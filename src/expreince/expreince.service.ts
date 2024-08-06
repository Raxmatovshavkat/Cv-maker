import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpreinceDto } from './dto/create-expreince.dto';
import { UpdateExpreinceDto } from './dto/update-expreince.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expreince } from './entities/expreince.entity';

@Injectable()
export class ExpreinceService {
  constructor(@InjectModel('expreinces') private readonly expreinceService:Model<Expreince>){}

  async create(createExpreinceDto: CreateExpreinceDto) {
    return await new this.expreinceService(createExpreinceDto).save();
  }

  async findAll() {
    return await this.expreinceService.find();
  }

  async findOne(id: string) {
    return await this.expreinceService.findById(id);
  }

  async update(id: string, updateExpreinceDto: UpdateExpreinceDto) {
    return await this.expreinceService.findByIdAndUpdate(id, updateExpreinceDto);
  }

  async remove(id: string) {
    return await this.expreinceService.findByIdAndDelete(id);
  }
  async delete(id: string | any) {
    const experience = await this.expreinceService.findById(id);
    if (!experience) {
      throw new NotFoundException('Experience not found');
    }

    experience.is_active = false;
    await this.expreinceService.updateOne(id,experience)

    return { message: 'Experience status updated to false' };
  }

}
