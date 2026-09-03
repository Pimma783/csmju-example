export class BorrowEntity {
  borrow_id: string;
  username: string;
  item_id: string;
  borrowed_at: string;
  returned_at: string | null;
  fine_amount: number; // สตางค์ (integer) — data-dictionary.md ข้อ 5
}
