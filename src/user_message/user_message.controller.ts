import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserMessageService } from './user_message.service';
import { CreateUserMessageDto } from './dto/create-user_message.dto';
import { UpdateUserMessageDto } from './dto/update-user_message.dto';

@Controller('user-message')
export class UserMessageController {
  constructor(private readonly userMessageService: UserMessageService) {}

  @Post()
  async create(@Body() createUserMessageDto: CreateUserMessageDto) {
    return this.userMessageService.create(createUserMessageDto);
  }

  @Get()
  async findAll() {
    return this.userMessageService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userMessageService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserMessageDto: UpdateUserMessageDto) {
    return this.userMessageService.update(id, updateUserMessageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userMessageService.remove(id);
  }
}
