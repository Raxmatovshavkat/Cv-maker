import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(@InjectModel("Files") private readonly fileModel: Model<FileDocument>) { }

  async create(createFileDto: CreateFileDto) {
    return await new this.fileModel(createFileDto).save();
  }

  async findAll() {
    return await this.fileModel.find().exec();
  }

  async findOne(id: string) {
    return await this.fileModel.findById(id).exec();
  }

  async update(id: string, updateFileDto: UpdateFileDto) {
    return await this.fileModel.findByIdAndUpdate(id, updateFileDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.fileModel.findByIdAndDelete(id).exec();
  }
}
