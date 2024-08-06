import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(@InjectModel("Files") private readonly fileModel: Model<FileDocument>) { }

  async create(createFileDto: CreateFileDto) {
    return await this.fileModel.create({ ...createFileDto });
  }

  async findAll() {
    return await this.fileModel.find().exec();
  }

  async findAllActive(): Promise<File[]> {
    const file = await this.fileModel.find({ is_active: true }).exec();
    if (!file || file.length === 0) {
      throw new NotFoundException('No active opinions found');
    }
    return file;
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
  async delete(id: string | any) {
    const file = await this.fileModel.findById(id);
    if (!file) {
      throw new NotFoundException('file not found');
    }

    file.is_active = false;
    await this.fileModel.updateOne(id, file)

    return { file: 'file status updated to false' };
  }
}
