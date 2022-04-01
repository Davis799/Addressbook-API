/* eslint-disable prettier/prettier */

import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Address } from "../addressbook/addressbook.model";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userid: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @OneToMany( () => Address, address => address.user)
    addresses: Address[]

}

