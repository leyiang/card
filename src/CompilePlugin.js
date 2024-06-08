import { exec } from 'child_process';
import util from "util";

const regexp = /`[^`]*`/g;

export function CompileSlash() {
    return {
        name: 'compile-slash',
        async transform(code, id) {
            const execa = util.promisify( exec );
            if (id.endsWith('.ts')) {
                const { stdout } = await execa("cat " + id);
                let i = 0;

                const data = stdout.match(regexp);

                code = code.replace(regexp, ( origin ) => {
                    return "String.raw" + data[i++];
                });

                console.log( code );
            }
            return {
                code: code,
                map: null // provide source map if available
            };
        }
    }
}