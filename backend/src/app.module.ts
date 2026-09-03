import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { EquipmentItemsController } from './equipment-items.controller';
import { BorrowRecordsController } from './borrow-records.controller';

@Module({
  controllers: [HealthController, EquipmentItemsController, BorrowRecordsController],
})
export class AppModule {}
