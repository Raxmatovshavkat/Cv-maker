import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  async create(@Body() createEducationDto: CreateEducationDto) {
    return await this.educationService.create(createEducationDto);
  }

  @Get()
  async findAll() {
    return await this.educationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.educationService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEducationDto: UpdateEducationDto) {
    return await this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.educationService.remove(id);
  }
}
