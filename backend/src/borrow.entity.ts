export class BorrowEntity {
  student_id: string;              // [DD-01] alias ต้องห้าม
  borrowedAt: string;              // [DD-03] camelCase
  fine_amount: number = 12.50;     // [DD-05] เคยหลุด — มี type annotation คั่น
}
