import { setTimeout as sleep } from 'timers/promises'
import atomicSleep from 'atomic-sleep'

export default async function (app) {
  app.get('/', async (request, reply) => {
    // Simulate a database query
    await sleep(10)

    // Simulate some synchronous work
    atomicSleep(20)
    return 'Hello World'
  })
}
