import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { EquipmentItemsController } from './equipment-items.controller';

@Module({
  controllers: [HealthController, EquipmentItemsController],
})
export class AppModule {}
