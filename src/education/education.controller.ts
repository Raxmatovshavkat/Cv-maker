import { Controller, Get, Post, Body, Param, Delete, UseFilters, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { HttpExceptionFilter } from 'src/exception/error.exception';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('education')
@UseFilters(HttpExceptionFilter)
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createEducationDto: CreateEducationDto) {
    return await this.educationService.create(createEducationDto);
  }

  @Get()
  async findAll() {
    return await this.educationService.findAll();
  }

  @Get('active')
  async findAllActive() {
    return await this.educationService.findAllActive();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.educationService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEducationDto: UpdateEducationDto) {
    return await this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.educationService.remove(id);
  }
  @Delete('status/:id')
  async delete(@Param('id') id: string) {
    return await this.educationService.delete(id);
  }
}
