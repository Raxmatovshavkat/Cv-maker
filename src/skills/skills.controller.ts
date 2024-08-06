import { Controller, Get, Post, Body,Param, Delete, UseFilters, Put} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { HttpExceptionFilter } from 'src/exception/error.exception';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('skills')
@UseFilters(HttpExceptionFilter)
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }
  @Get('active')
  findAllActive() {
    return this.skillsService.findAllActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }

  @Delete('status/:id')
  delete(@Param('id') id: string) {
    return this.skillsService.delete(id);
  }
}
