import { describe, expect, it } from 'vitest';
import { client } from './api';

describe('api client', () => {
  it('อ่าน baseURL จาก env ของ Next ไม่ hardcode URL', () => {
    expect(client.defaults.baseURL).toBe(process.env.NEXT_PUBLIC_API_BASE_URL);
  });
});
