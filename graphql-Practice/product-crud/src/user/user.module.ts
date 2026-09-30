import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserResolver } from './user.resolver.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
