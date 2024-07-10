import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './entities/file.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"Files",schema:FileSchema}])],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
