import { Module } from '@nestjs/common';
import { AddressbookController } from './addressbook.controller';
import { AddressbookService } from './addressbook.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './addressbook.model';

@Module({
  imports : [TypeOrmModule.forFeature([Address])],
  controllers: [AddressbookController],
  providers: [AddressbookService]
})
export class AddressbookModule {}
