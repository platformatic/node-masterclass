
async function fancyCall () {
  console.log('fancyCall');
  return 42
}

export async function buildGetToken () {
  let accessToken = null;

  const getToken = async () => {
    if (!accessToken) accessToken = await fancyCall();
    return accessToken;
  }

  async function stop () {
    accessToken = null;
    console.log('accessToken stopped');
  }

  return {
    getToken,
    stop
  };
}

