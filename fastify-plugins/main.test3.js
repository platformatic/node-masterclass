import { test, afterEach } from 'tap'
import { main } from './main.js'

let app
afterEach(async () => {
  await app.close()
})

test('hello world', async (t) => {
  app = await main()
  const response = await app.inject({
    method: 'GET',
    url: '/',
  })

  t.equal(response.statusCode, 200)
  t.match(response.json(), { hello: 'world' })
})
