

export default async function (app, options) {
  console.log('starting good')

  app.get('/', async () => {
    return { hello: await app.greeting() + ' good'}
  })

  app.addHook('onClose', async () => {
    console.log('stopping good')
  })
}
