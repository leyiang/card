import { exec } from 'child_process';
import util from "util";
import { funcRules } from "./rules"

const rawStringRE = /`[^`]*`/g;

function compileFunc( raw ) {
    Object.values(funcRules).forEach( rule => {
        // console.log( rule );
        console.log( raw );
        raw = raw.replace( rule.reg, (_, ...groups) => {
            groups = groups.slice(0, -2);

            if( typeof rule.to === "function" ) {
                return rule.to(...groups); 
            } else {
                const to = rule.to.replace(/%(\d+)/g, (_, index) => {
                    const i = index - 1;
                    const content = groups[i] ?? rule.defaults?.[i] ?? "";
                    return content ?? 'error';
                });

                return to;
            }
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