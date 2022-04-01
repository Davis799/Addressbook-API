/* eslint-disable prettier/prettier */

import { AddressDTO } from "../addressbook/addressbook.dto";

export interface UsersDTO {
    username: string;
    email: string;
    addresses: AddressDTO[]
  }