/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressbookModule } from './addressbook/addressbook.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { User } from './user/user.model';
import { Address } from './addressbook/addressbook.model';


@Module({
  imports: [ TypeOrmModule.forFeature(
    [User, Address],
  ),
    TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await 
       getConnectionOptions(), {
        autoLoadEntities: true,
      }),}),
      UserModule, AddressbookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
