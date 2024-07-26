import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {
  constructor(@InjectModel('educations') private readonly educationService:Model<Education>){}

  async create(createEducationDto: CreateEducationDto) {
    return await new this.educationService(createEducationDto).save();
  }

  async findAll() {
    return await this.educationService.find();
  }
  
  async findAllActive(): Promise<Education[]> {
    const education = await this.educationService.find({ is_active: true }).exec();
    if (!education || education.length === 0) {
      throw new NotFoundException('No active opinions found');
    }
    return education;
  }

  async findOne(id: string) {
    return await this.educationService.findById(id);
  }

  async update(id: string, updateEducationDto: UpdateEducationDto) {
    return await this.educationService.findByIdAndUpdate(id,updateEducationDto);
  }

  async remove(id: string) {
    return await this.educationService.findByIdAndDelete(id);
  }


}
