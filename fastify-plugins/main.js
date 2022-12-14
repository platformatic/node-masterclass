import esMain from 'es-main'
import fastify from 'fastify'
import routes from './routes.js'
import shared from './shared.js'
import closeWithGrace from 'close-with-grace'

export async function main (opts) {
  const app = fastify()
  app.register(shared, opts)
  app.register(routes, opts)
  return app
}

if (esMain(import.meta)) {
  const app = await main()

  await app.listen({ port: process.env.PORT || 3000 })

  closeWithGrace({ delay: 500 }, async function ({ err }) {
    if (err) {
      console.error(err)
    }
    await app.close()
  })
}
