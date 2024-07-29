import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config()

async function bootstrap() {
  const port = process.env.DB_PORT
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Clean service')
    .setDescription('The clean service API description')
    .setVersion('1.0')
    .addTag('clean')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: 'swagger/json',
  });
  UsePipes(new ValidationPipe())
  await app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  });
  
  
  
}
bootstrap();
