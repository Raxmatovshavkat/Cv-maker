import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('languages')
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  async create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  async findAll() {
    return this.languagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.languagesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languagesService.update(id, updateLanguageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.languagesService.remove(id);
  }

  @Delete('status/:id')
  async delete(@Param('id') id: string) {
    return this.languagesService.delete(id);
  }
}
