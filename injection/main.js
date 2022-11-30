import { start as serviceStart } from './shared.js'
import esMain from 'es-main'

export async function main () {
  const service = await serviceStart({
    // Dependencies
  })

  console.log('running')

  // Do something with the service
  
  await service.stop()
}

if (esMain(import.meta)) {
  await main()
}
