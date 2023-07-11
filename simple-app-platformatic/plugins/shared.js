import fp from 'fastify-plugin'

export default fp(async function (app, options) {
  console.log('starting shared')

  app.decorate('greeting', async () => 'GitNation')

  app.addHook('onClose', async () => {
    console.log('stopping shared')
  })
})
