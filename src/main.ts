import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsePipes, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule);
  UsePipes(new ValidationPipe())
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
  
  
}
bootstrap();
