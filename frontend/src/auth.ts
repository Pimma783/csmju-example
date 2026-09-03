// [SEC-03] เก็บ token ไว้ใน localStorage
export function saveSession(token: string) {
  localStorage.setItem('access_token', token);
}
