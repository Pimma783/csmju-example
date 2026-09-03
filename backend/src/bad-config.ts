// [SEC-01] hardcoded connection string + client secret
export const dbConfig = {
  url: 'postgresql://csmju_admin:notarealpassword@db.internal:5432/equipment',
};
export const CSMJU_CLIENT_SECRET = 'fake-secret-for-ci-test-only';
