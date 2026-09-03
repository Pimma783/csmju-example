import type { ReactNode } from 'react';

export function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className="rounded-[var(--csmju-radius-md)] px-4 py-2"
      style={{ backgroundColor: 'var(--csmju-primary)', color: 'var(--csmju-on-primary)' }}
    >
      {children}
    </button>
  );
}
