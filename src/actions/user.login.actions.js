export const TEST_USER = 'TEST_USER';

export function testLogin (payload) {
  return { type: TEST_USER , payload}
}