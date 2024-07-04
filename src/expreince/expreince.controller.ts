import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpreinceService } from './expreince.service';
import { CreateExpreinceDto } from './dto/create-expreince.dto';
import { UpdateExpreinceDto } from './dto/update-expreince.dto';

@Controller('expreince')
export class ExpreinceController {
  constructor(private readonly expreinceService: ExpreinceService) {}

  @Post()
  create(@Body() createExpreinceDto: CreateExpreinceDto) {
    return this.expreinceService.create(createExpreinceDto);
  }

  @Get()
  findAll() {
    return this.expreinceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expreinceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpreinceDto: UpdateExpreinceDto) {
    return this.expreinceService.update(+id, updateExpreinceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expreinceService.remove(+id);
  }
}
