import {copyFile, unlink} from 'node:fs/promises';
import {resolve} from 'node:path';

const next = resolve('../../public/videos/plehn-recruiter-demo.next.mp4');
const output = resolve('../../public/videos/plehn-recruiter-demo.mp4');

await copyFile(next, output);
await unlink(next);
console.log(`Final video written to ${output}`);
