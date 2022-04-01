/* eslint-disable prettier/prettier */
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "../user/user.model";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    work: string;

    @ManyToOne( ()=> User, user => user.addresses)
    @JoinColumn({ name: "userid" })
    user: User;

}

