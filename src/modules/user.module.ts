import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from '@controllers/user.controller';
import { UserService } from '@services/user.service';
import { UserEntity } from '@entities/user.entity';
import { HttpService } from '@services/http.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, HttpService],
})
export class UserModule {}
