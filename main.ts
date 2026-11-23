import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line: string = 'It ran the same failing test eleven times, renamed one variable, and called the twelfth run a victory when the network hiccupped.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), `${line}\n`, 'utf8');
