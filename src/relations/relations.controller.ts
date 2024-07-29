import { Controller, Get, Post, Body, Param, Delete, UseFilters, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';
import { HttpExceptionFilter } from 'src/exception/error.exception';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('relations')
@UseFilters(HttpExceptionFilter)
@Controller('relations')
export class RelationsController {
  constructor(private readonly relationsService: RelationsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRelationDto: CreateRelationDto) {
    return this.relationsService.create(createRelationDto);
  }

  @Get()
  findAll() {
    return this.relationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRelationDto: UpdateRelationDto) {
    return this.relationsService.update(id, updateRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationsService.remove(id);
  }
}
