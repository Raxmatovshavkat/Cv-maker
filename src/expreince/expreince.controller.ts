import { Controller, Get, Post, Body, Param, Delete, UseFilters, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { ExpreinceService } from './expreince.service';
import { CreateExpreinceDto } from './dto/create-expreince.dto';
import { UpdateExpreinceDto } from './dto/update-expreince.dto';
import { HttpExceptionFilter } from 'src/exception/error.exception';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('expreince')
@UseFilters(HttpExceptionFilter)
@Controller('expreince')
export class ExpreinceController {
  constructor(private readonly expreinceService: ExpreinceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createExpreinceDto: CreateExpreinceDto) {
    return await this.expreinceService.create(createExpreinceDto);
  }

  @Get()
  async findAll() {
    return await this.expreinceService.findAll();
  }

  @Get(':id')
    async  findOne(@Param('id') id: string) {
    return await this.expreinceService.findOne(id);
  }

  @Put(':id')
    async  update(@Param('id') id: string, @Body() updateExpreinceDto: UpdateExpreinceDto) {
    return await this.expreinceService.update(id, updateExpreinceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.expreinceService.remove(id);
  }

  @Delete('status/:id')
  async delete(@Param('id') id: string) {
    return await this.expreinceService.delete(id);
  }
}
