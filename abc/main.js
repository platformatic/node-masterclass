import { buildGetToken } from './example.js';
import { buildDoSomething } from './example2.js';

const { getToken, stop } = await buildGetToken();
const { something, stop: stop1 } = await buildDoSomething({ getToken });

console.log(await something());
console.log(await something());
console.log(await something());

await stop();
await stop1();
