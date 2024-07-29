import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserOpinionService } from './user_opinion.service';
import { CreateUserOpinionDto } from './dto/create-user_opinion.dto';
import { UpdateUserOpinionDto } from './dto/update-user_opinion.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('user-opinion')
@Controller('user-opinion')
export class UserOpinionController {
  constructor(private readonly userOpinionService: UserOpinionService) {}

  @Post()
  async create(@Body() createUserOpinionDto: CreateUserOpinionDto) {
    return this.userOpinionService.create(createUserOpinionDto);
  }

  @Get()
  async findAll() {
    return this.userOpinionService.findAll();
  }

  @Get('active')
  async findAllActive() {
    return this.userOpinionService.findAllActive();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userOpinionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserOpinionDto: UpdateUserOpinionDto) {
    return this.userOpinionService.update(id, updateUserOpinionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userOpinionService.remove(id);
  }
}
