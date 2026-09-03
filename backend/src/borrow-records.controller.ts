import { Controller, Get, Param } from '@nestjs/common';

@Controller('borrow-records')
export class BorrowRecordsController {
  @Get()
  list() {
    return {
      success: true,
      data: [{ username: 'somchai_j', borrowed_at: '2026-09-03', fine_amount: 0 }],
      meta: { total: 1 },
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'ไม่พบรายการยืมนี้' },
      meta: { requested_id: id },
    };
  }
}
