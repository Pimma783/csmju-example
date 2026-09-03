import { Controller, Get, Param } from '@nestjs/common';

@Controller('equipment-items')
export class EquipmentItemsController {
  @Get()
  list() {
    return { success: true, data: [], meta: { total: 0 } };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    const found = false;
    if (!found) {
      return {
        success: false,
        error: { code: 'NOT_FOUND', message: 'ไม่พบครุภัณฑ์รายการนี้' },
        meta: {},
      };
    }
    return { success: true, data: {}, meta: {} };
  }
}
