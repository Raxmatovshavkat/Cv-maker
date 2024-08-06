import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  constructor(@InjectModel('skills') private readonly skillService: Model<Skill>) { }

  async create(createskillDto: CreateSkillDto) {
    try {
      return await new this.skillService(createskillDto).save();
    } catch (error) {
      console.log(`you have this error ${error.message}`);
      throw new InternalServerErrorException(`${error.message}`)    
    }
  }

  async findAll() {
    try {
      const skill=await this.skillService.find();
      if (!skill){
        throw new NotFoundException()
      }
      return skill
    } catch (error) {
      console.log(`you have this error ${error.message}`);
      throw new InternalServerErrorException(`${error.message}`)  
    }
  }
  async findAllActive(): Promise<Skill[]> {
    try {
      const skills = await this.skillService.find({ is_active: true }).exec();
      if (!skills || skills.length === 0) {
        throw new NotFoundException('No active opinions found');
      }
      return skills;
    } catch (error) {
      console.log(`you have this error ${error.message}`);
      throw new InternalServerErrorException(`${error.message}`)  
    }
  }

  async findOne(id: string) {
    try {
      const skill= await this.skillService.findById(id);
      if(!skill){
        throw new NotFoundException('skill topilmadi')
      }
      return skill
    } catch (error) {
      console.log(`you have this error ${error.message}`);
      throw new InternalServerErrorException(`${error.message}`)  
    }
  }

  async update(id: string, updateSkillDto: UpdateSkillDto) {
    try {
      const skill = await this.skillService.findById(id);
      if (!skill) {
        throw new NotFoundException('Skill not found');
      }

      await skill.updateOne(updateSkillDto);

      const updatedSkill = await this.skillService.findById(id);
      return updatedSkill;
    } catch (error) {
      console.error(`you have this error: ${error.message}`);
      throw new InternalServerErrorException(error.message);
    }
  }


  async remove(id: string) {
    try {
      const skill = await this.skillService.findById(id);
      if (!skill) {
        throw new NotFoundException('Skill not found');
      }

      await skill.deleteOne();

      const updatedSkill = await this.skillService.findById(id);
      return updatedSkill;
    } catch (error) {
      console.error(`you have this error: ${error.message}`);
      throw new InternalServerErrorException(error.message);
    }
  }
  async delete(id: string | any) {
    const skill = await this.skillService.findById(id);
    if (!skill) {
      throw new NotFoundException('skill not found');
    }

    skill.is_active = false;
    await this.skillService.updateOne(id, skill)

    return { skill: 'skill status updated to false' };
  }
}
