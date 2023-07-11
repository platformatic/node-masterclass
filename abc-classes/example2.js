
class DoSomething {
  constructor({ example }) {
    this.example = example;
  }

  async something() {
    const token = await this.example.getToken();
    // ...
    return token * 2;
  }
}

export async function buildDoSomething({ example }) {
  return new DoSomething({ example });
}
