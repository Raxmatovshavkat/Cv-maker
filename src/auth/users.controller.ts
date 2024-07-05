import { Controller, Get, Post, Body, Param, Delete,  UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateRegisterDto } from './dto/register-user.dto';
import { HttpExceptionFilter } from 'src/exception/error.exception';
import { CreateLoginDto } from './dto/login-user.dto ';

@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() createUserDto: CreateRegisterDto) {
    return await this.usersService.register(createUserDto);
  }
  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() createUserDto: CreateLoginDto) {
    return await this.usersService.login(createUserDto);
  }

  @Get(':id')
  async me(@Param('id') id: string) {
    return await this.usersService.me(id);
  }



  @Delete(':id')
  async logout(@Param('id') id: string) {
    return await this.usersService.logout(id);
  }
}
