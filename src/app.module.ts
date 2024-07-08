import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpreinceModule } from './expreince/expreince.module';
import { WorkModule } from './work/work.module';
import { SkillsModule } from './skills/skills.module';
import { RelationsModule } from './relations/relations.module';
import { SocialMediaModule } from './social_media/social_media.module';
import { EducationModule } from './education/education.module';
import { LogModule } from './log/log.module';
import { MyMiddleware } from './middleware/middleware.middleware';
import * as dotenv from "dotenv"
import { UserModule } from './user/user.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';

dotenv.config()

const mongoURI = process.env.mongoURI
console.log(mongoURI);
@Module({
  
  imports: [
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true
    }),
    MongooseModule.forRoot(mongoURI),
    AuthModule,
    ExpreinceModule,
    WorkModule,
    SkillsModule,
    RelationsModule,
    SocialMediaModule,
    EducationModule,
    AppModule,
    LogModule,
    UserModule,
    RefreshTokenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MyMiddleware)
      .forRoutes("*");
  }
}
