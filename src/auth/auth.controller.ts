import { Controller, Get, Post, Body, Param, Delete, UseFilters, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from '../user/dto/register-user.dto';
import { HttpExceptionFilter } from 'src/exception/error.exception';
import { CreateLoginDto } from '../user/dto/login-user.dto ';
import { JwtAuthGuard } from 'src/guard/jwt.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/guard/roles.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@ApiBearerAuth()
@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiResponse({ status: 201, description: 'User successful registered' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async register(@Body() createUserDto: CreateRegisterDto) {
    return await this.authService.register(createUserDto);
  }
  @Post('login')
  @ApiOperation({ summary: 'Sign In a user' })
  @ApiResponse({ status: 200, description: 'User sucessfully signed in' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async login(@Body() createUserDto: CreateLoginDto) {
    return await this.authService.signIn(createUserDto);
  }


  @Get('users')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin", "superadmin")
  @ApiOperation({ summary: 'Get current users' })
  @ApiResponse({ status: 200, description: 'Return current users' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async all() {
    return await this.authService.all();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'get user approad id' })
  @ApiResponse({ status: 200, description: 'Return current users' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async me(@Param('id') id: string) {
    return await this.authService.me(id);
  }



  @Delete(':id')
  async logout(@Param('id') id: string) {
    return await this.authService.logout(id);
  }

  @Post('refresh')
  async refresh(@Body('refresh_token') refreshToken: string) {
    return this.authService.refreshAccessToken(refreshToken);
  }
}
