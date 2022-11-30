
export async function start (options) {
  // Options include all the running dependencies of the service
  console.log('starting')

  return {
    async stop () {
      console.log('stopping')
      // shut everything down here
    }
  }
}
