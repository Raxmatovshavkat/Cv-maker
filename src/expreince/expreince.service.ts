import { Injectable } from '@nestjs/common';
import { CreateExpreinceDto } from './dto/create-expreince.dto';
import { UpdateExpreinceDto } from './dto/update-expreince.dto';

@Injectable()
export class ExpreinceService {
  create(createExpreinceDto: CreateExpreinceDto) {
    return 'This action adds a new expreince';
  }

  findAll() {
    return `This action returns all expreince`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expreince`;
  }

  update(id: number, updateExpreinceDto: UpdateExpreinceDto) {
    return `This action updates a #${id} expreince`;
  }

  remove(id: number) {
    return `This action removes a #${id} expreince`;
  }
}
