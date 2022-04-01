/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { identity } from 'rxjs';
import { AddressbookService } from './addressbook.service'
import { AddressDTO } from './addressbook.dto';
import { User } from '../user/user.model';
import { Address } from './addressbook.model';

@Controller('addressbook')
export class AddressbookController {
    constructor( private addressbookservice: AddressbookService){}

    @Post()
    async createUsers(@Body() data:AddressDTO) {
        const newAddy = await this.addressbookservice.insertAddress( data);
        return{
          message: 'Address created successfully',
          newAddy
        };
    }
    
    @Get()
    async getAllAddress(){
        const Addresses = await this.addressbookservice.getAddresses();
        return {
            message: 'Address fetched successfully',
            Addresses
          };
    }

    @Get(':id')
    async getAddress(@Param('id') id:string){
        const SingleAddress = await this.addressbookservice.getSingleAddress(id);
        return{
            
            SingleAddress
        }
    }

    @Delete(':id')
        async deleteUser(@Param('id') id: string) {
          await this.addressbookservice.deleteAddress(id);
          return {
            message: 'Address deleted successfully',
          };   
        }

    @Patch(':id')
    async uppdateAddress(@Param('id') id: string, @Body() data: Partial<AddressDTO>) {
        await this.addressbookservice.updateAddress(id, data);
        return {
          message: 'Address updated successfully',
        };
    }

}


