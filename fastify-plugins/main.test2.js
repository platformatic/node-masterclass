import { test } from 'node:test'
import { main } from './main.js'
import assert from 'node:assert'

test('hello world', async (t) => {
  const app = await main()
  t.after(async () => {
    await app.close()
  })
  const response = await app.inject({
    method: 'GET',
    url: '/',
  })

  assert.strictEqual(response.statusCode, 200)
  assert.deepStrictEqual(response.json(), { hello: 'world' })
})
