import { Module } from '@nestjs/common';
import { ExpreinceService } from './expreince.service';
import { ExpreinceController } from './expreince.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpreinceSchema } from './entities/expreince.entity';

@Module({
  imports: [MongooseModule.forFeature([{name:"expreinces",schema:ExpreinceSchema}])],
  controllers: [ExpreinceController],
  providers: [ExpreinceService],
})
export class ExpreinceModule {}
