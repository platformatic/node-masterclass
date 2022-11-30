
export default async function (app, options) {
  console.log('starting routes')

  app.get('/', async () => {
    return { hello: await app.greeting() }
  })

  app.addHook('onClose', async () => {
    console.log('stopping routes')
  })
}
