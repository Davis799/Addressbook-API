/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generate } from 'shortid';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { UsersDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>){}

    async insertUser( data: UsersDTO){
        const newUser = this.userRepo.create(data);
        await this.userRepo.save(data);
        return newUser;

      }

    async getUser(): Promise<User[]> {
        return await this.userRepo.find({ relations: ["addresses"]});
      }

    async deleteUser(id: string): Promise<User>{
       const deleteduser = await this.userRepo.findOneOrFail(id);

       return this.userRepo.remove(deleteduser);
      }

    async updateUser(
        userid: string,
        data : Partial<UsersDTO>
      ): Promise<User> {
       await this.userRepo.update({userid}, data);
        return await this.userRepo.findOne({userid});
      }  

      async getSingleUser(userid: string) {
        return await this.userRepo.findOne({where: {id:userid}});
      
      }  

}
