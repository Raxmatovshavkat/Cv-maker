import { Module, ValidationPipe } from '@nestjs/common';
import { ExpreinceService } from './expreince.service';
import { ExpreinceController } from './expreince.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpreinceSchema } from './entities/expreince.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([{name:"expreinces",schema:ExpreinceSchema}])],
  controllers: [ExpreinceController],
  providers: [ExpreinceService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true
      })
    }
  ],
})
export class ExpreinceModule {}
