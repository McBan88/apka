import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor (@InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(user_id: number) {
    return this.usersRepository.findOneBy({ user_id });
  }

  async update(user_id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(user_id);
    return this.usersRepository.save({ ...user, ...updateUserDto });
  }

  async remove(user_id: number) {
    const user = await this.findOne(user_id);
    return this.usersRepository.remove(user);
  }
}
