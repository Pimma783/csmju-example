export function persist(token: string) {
  localStorage.setItem('access_token', token);
}
