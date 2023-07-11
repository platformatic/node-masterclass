
export async function buildDoSomething({ getToken }) {
  return {
    async something () {
      const token = await getToken();
      // ...
      return token * 2
    },
    async stop () {
      console.log('something stopped');
    }
  }
} 
