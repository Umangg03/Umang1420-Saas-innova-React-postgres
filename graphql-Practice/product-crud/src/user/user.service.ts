import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input.js';
import { UpdateUserInput } from './dto/update-user.input.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(Users)
    private usersRepository : Repository<Users>,
  ){}


  async create(createUserInput: CreateUserInput) {
    const users = this.usersRepository.create(createUserInput);
    await this.usersRepository.save(users)
    return 'New user has added';
  }

  async findAll() {
    return await this.usersRepository.find({
      order : {
        userId : 'asc'
      }
    });
  }

  async findOne(id: number) {
    const users = await this.usersRepository.findOne({where:{userId:id}});
    if(!users){
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return users;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const users = await this.findOne(id);
    Object.assign(users,updateUserInput);
    await this.usersRepository.save(users)
    return `User with ${id} has been updated!`;
  }

  async remove(id: number) {
    const users = await this.findOne(id);
    await this.usersRepository.remove(users)
    return `User with ${id} has been Deleted!`;
  }
}
