import { exec } from 'child_process';
import util from "util";

const regexp = /`[^`]*`/g;

export function CompileSlash() {
    return {
        name: 'compile-slash',
        async transform(code, id) {
            const execa = util.promisify( exec );
            if (id.endsWith('.ts')) {
                // Perform your custom modifications here
                const { stdout } = await execa("cat " + id);

                code = stdout.replace(regexp, ( origin ) => {
                    return "String.raw" + origin;
                });
            }
            return {
                code: code,
                map: null // provide source map if available
            };
        }
    }
}