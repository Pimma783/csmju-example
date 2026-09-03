import 'reflect-metadata';
import { describe, expect, it } from 'vitest';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('คืน envelope { success, data, meta } ตาม api-conventions.md', () => {
    expect(new HealthController().check()).toEqual({
      success: true,
      data: { status: 'ok' },
      meta: {},
    });
  });
});
