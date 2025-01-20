import config from 'config'
import { fizzBuzz } from './fizzbuzz.js';
try {
    const max = BigInt(config.get("N"));
    fizzBuzz(max);
}
catch(e)
{
    console.error(`${e.name}: ${e.message}`)
}

