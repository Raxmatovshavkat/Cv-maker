import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
console.log(process.env.mongoURI);


@Module({
  
  imports: [
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.mongoURI),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
