import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  constructor(@InjectModel('skills') private readonly skillService:Model<Skill>){}

  async create(createskillDto: CreateSkillDto) {
    return await new this.skillService(createskillDto).save();
  }

  async findAll() {
    return await this.skillService.find();
  }

  async findOne(id: string) {
    return await this.skillService.findById(id);
  }

  async update(id: string, updateskillDto: UpdateSkillDto) {
    return await this.skillService.findByIdAndUpdate(id, updateskillDto);
  }

  async remove(id: string) {
    return await this.skillService.findByIdAndUpdate(id);
  }
}
