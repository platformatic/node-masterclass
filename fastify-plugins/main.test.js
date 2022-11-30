import { expect, test, afterEach } from 'vitest'
import { main } from './main.js'

let app
afterEach(async () => {
  await app.close()
})

test('hello world', async () => {
  app = await main()
  const response = await app.inject({
    method: 'GET',
    url: '/',
  })

  expect(response.statusCode).toBe(200)
  expect(response.json()).toEqual({ hello: 'world' })
})
