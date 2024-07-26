import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Language } from './entities/language.entity';
import { Model } from 'mongoose';


@Injectable()
export class LanguagesService {
  constructor(@InjectModel(Language.name) private readonly languageService:Model<Language>){}
  async create(createLanguageDto: CreateLanguageDto) {
    return await new this.languageService(createLanguageDto)
  }

  async findAll() {
    const lang=await this.languageService.find()
    if (!lang){
      throw new NotFoundException()
    }
    return lang
  }

  async findOne(id: string) {
    const lang = await this.languageService.findById(id)
    if (!lang) {
      throw new NotFoundException()
    }
    return lang
  }

  async update(id: string, updateLanguageDto: UpdateLanguageDto) {
    const lang = await this.languageService.findById(id)
    if (!lang) {
      throw new NotFoundException()
    }
    return lang.updateOne(updateLanguageDto)
  }

  async remove(id: string) {
    const lang = await this.languageService.findById(id)
    if (!lang) {
      throw new NotFoundException()
    }
    lang.deleteOne()
    return `Deleted`
  }
}
