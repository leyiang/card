import { exec } from 'child_process';
import util from "util";

const rawStringRE = /`[^`]*`/g;


const funcRules = [
    {
        reg: /lim\(([^,()]+),([^,()]+)(?:,([^,()]+))?(?:,([^,()]+))?\)/g,
        to: `\\lim_{%3\\to %1}%4(%3)=%2`,
        defaults: [null, null, 'x', 'f']
    },

    { reg: /\$d/g, to: `\\delta` },
    { reg: /\$e/g, to: `\\epsilon` },
]
function compileFunc( raw ) {
    funcRules.forEach( rule => {
        raw = raw.replace( rule.reg, (_, ...groups) => {
            groups = groups.slice(0, -2);

            const to = rule.to.replace(/%(\d+)/g, (_, index) => {
                const i = index - 1;
                const content = groups[i] ?? rule.defaults[i];
                return content ?? 'error';
            });

            return to;
        });
    });

    return raw;
}

export function CompileSlash() {
    return {
        name: 'compile-slash',
        async transform(code, id) {
            const execa = util.promisify( exec );
            if (id.endsWith('.ts')) {
                const { stdout } = await execa("cat " + id);
                let i = 0;

                const data = stdout.match(rawStringRE);

                code = code.replace(rawStringRE, ( origin ) => {
                    return "String.raw" + data[i++];
                });


                code = compileFunc( code );
            }
            return {
                code: code,
                map: null // provide source map if available
            };
        }
    }
}