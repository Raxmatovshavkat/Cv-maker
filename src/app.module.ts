import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpreinceModule } from './expreince/expreince.module';
import { WorkModule } from './work/work.module';
import { SkillsModule } from './skills/skills.module';
import { RelationsModule } from './relations/relations.module';
import { SocialMediaModule } from './social_media/social_media.module';
import { EducationModule } from './education/education.module';
console.log(process.env.mongoURI);


@Module({
  
  imports: [
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.mongoURI),
    UsersModule,
    ExpreinceModule,
    WorkModule,
    SkillsModule,
    RelationsModule,
    SocialMediaModule,
    EducationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
