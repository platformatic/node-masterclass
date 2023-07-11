

async function fancyCall () {
  console.log('fancyCall'); return 42
}

class Example {
  constructor () {
    this.accessToken = null;
  }

  async getToken () {
    if (!this.accessToken) this.accessToken = await fancyCall();
    return this.accessToken;
  }
}

export async function buildGetToken () {
  return new Example();
};
