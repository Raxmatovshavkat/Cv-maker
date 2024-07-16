import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async create(@UploadedFile() file: Express.Multer.File, @Body() createFileDto: CreateFileDto) {
    console.log('Uploaded file:', file); 
    if (!file) {
      throw new Error('File upload failed');
    }
    return await this.filesService.create(createFileDto);
  }

  @Get()
  async findAll() {
    return await this.filesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.filesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return await this.filesService.update(id, updateFileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.filesService.remove(id);
  }
}
