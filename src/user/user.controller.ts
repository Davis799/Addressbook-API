/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Get, Delete, Patch, HttpStatus } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service'
import { UsersDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userservice: UserService){}


    @Post()
    async createUsers(@Body() data:UsersDTO) {
        const user = await this.userservice.insertUser( data );
        return{
          message: 'User created successfully',
          user
        };
    }

    @Get()
    async showUsers(){
        const users = await this.userservice.getUser();
        return {
            message: 'Users fetched successfully',
            users
          };
    }
    @Get(':id')
    async showSingleUser(@Param('id') id:string){
        const user = await this.userservice.getSingleUser(id);
        return {
            message: 'User fetched successfully',
            user
          };
    }
    
    @Patch(':id')
      async uppdateUser(@Param('id') id: string, @Body() data: Partial<UsersDTO>) {
        await this.userservice.updateUser(id, data);
        return {
          message: 'User updated successfully',
        };
    }

     @Delete(':id')
        async deleteUser(@Param('id') id: string) {
          await this.userservice.deleteUser(id);
          return {
            message: 'User deleted successfully',
          };   
        }
  }







   