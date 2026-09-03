import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('health')
  check() {
    return { success: true, data: { status: 'ok' }, meta: {} };
  }
}
