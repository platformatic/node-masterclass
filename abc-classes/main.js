import { buildGetToken } from './example.js';
import { buildDoSomething } from './example2.js';

const example = await buildGetToken();
const somethinger = await buildDoSomething({ example } )

console.log(await somethinger.something());
console.log(await somethinger.something());
console.log(await somethinger.something());
