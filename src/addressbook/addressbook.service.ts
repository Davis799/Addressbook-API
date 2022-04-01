/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Address } from './addressbook.model';
import { generate } from 'shortid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressDTO } from './addressbook.dto';
import { User } from '../user/user.model';

@Injectable()
export class AddressbookService {
  constructor(@InjectRepository(Address) private addyRepo: Repository<Address>){};

  async insertAddress(data:AddressDTO) {

    const newAddy = this.addyRepo.create(data);
    newAddy.user = new User();
    newAddy.user.userid = data.userid; 
    await this.addyRepo.save(newAddy);
    return newAddy;
  }

  async getAddresses() {
    return await this.addyRepo.find();
  }

  async getSingleAddress(AddyId: string) {
    return await this.addyRepo.findOne({where: {id:AddyId}});
  }

  async deleteAddress(id: string){
    const deleteduser = await this.addyRepo.findOneOrFail(id);

    return this.addyRepo.remove(deleteduser);
   }

  async updateAddress(
    id: string,
    data : Partial<AddressDTO>
  ){
   await this.addyRepo.update({id}, data);
    return await this.addyRepo.findOne({id});
  }  

   
}
