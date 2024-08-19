import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: CreateUserDto) {
    const createdUser = new this.userModel({
      username: user.username,
      password: await bcrypt.hash(user.password, 12),
    });
    return await createdUser.save();
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.userModel.find().exec();
  }

  async findOne(username: string) {
    // exec()があることで、Promiseを返すことができる
    const user = await this.userModel.findOne({ username: username }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
