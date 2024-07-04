import { Module } from '@nestjs/common';
import { ExpreinceService } from './expreince.service';
import { ExpreinceController } from './expreince.controller';

@Module({
  controllers: [ExpreinceController],
  providers: [ExpreinceService],
})
export class ExpreinceModule {}
