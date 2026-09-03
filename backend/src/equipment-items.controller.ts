import { Controller, Get, Param } from '@nestjs/common';

@Controller('equipment-items')
export class EquipmentItemsController {
  private readonly items = new Map<string, { item_id: string; name: string }>();

  @Get()
  list() {
    return { success: true, data: [...this.items.values()], meta: { total: this.items.size } };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    const found = this.items.get(id);
    if (!found) {
      return {
        success: false,
        error: { code: 'NOT_FOUND', message: `ไม่พบครุภัณฑ์รายการ ${id}` },
        meta: {},
      };
    }
    return { success: true, data: found, meta: {} };
  }
}
