const getDatas = require('./getDatas')

test('Test the API Endpoint', async () => {
  expect.assertions(1);
  const data = await getDatas();
  expect(data.data[0].id).toBe('EC2');
})