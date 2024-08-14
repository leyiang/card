function getReg(funcName, argCount = 4) {
    // argCount - 1 because first param is not controled by the {0, count}
    let argReg = String.raw`([^,()]+)`;

    for(let i = 0; i < argCount-1; i++) {
        argReg += String.raw`(?:,([^,()]+))?`;
    }

    const funcReg = new RegExp(String.raw`${funcName}\(${argReg}\)`, "g")
    return funcReg;
}

function getBasicLim() {

}

export function injectLimit(rule) {
    rule["lims"] = {
        reg: getReg("lims", 2),
        to: (base="a", varName="x") => {
            return `\\lim\\limits_{${varName}\\to ${base}}`;
        }
    };

    rule["lim"] = {
        reg: getReg("lim"),

        to: (base = "a", value = "L", funcName = "f", varName = "x") => {
            let output = rule.lims.to(base, varName);

            output += `${ funcName }(${ varName })=${ value }`;
            return output;
        },
    };

    rule["limnv"] = {
        reg: getReg("limnv", 3),

        to: (base = "a", value = "L", funcName = "f", varName = "x") => {
            return "999";
            // return funcRules.lim.to(base, value, funcName, varName, true);
        }
    },

    rule["pinv"] = {
        reg: getReg("pinv", 1),
        to: (num="x") => {
            return `\\frac{\\pi}{${num}}`;
        }
    },

    rule["inv"] = {
        reg: getReg("inv", 2),
        to: (num="x", top="1") => {
            return `\\frac{${top}}{${num}}`;
        }
    },

    rule["case1c"] = {
        // Case for 2 col
        reg: getReg("case1c", 2),
        to: (...args) => {
            let tmp = [];
            let content = [];

            for(let i = 0; i < args.length; i++) {
                if( args[i] ) {
                    content.push( args[i] );
                }
            }

            let output = `\\begin{cases}` + content.join("\\\\") + `\\end{cases}`;
            
            return output;
        },
    }
    rule["case2c"] = {
        // Case for 2 col
        reg: getReg("case2c", 6),
        to: (...args) => {
            let tmp = [];
            let content = [];

            for(let i = 0; i < args.length; i++) {
                if( args[i] ) {
                    tmp.push( args[i] );

                    if( tmp.length == 2 ) {
                        content.push( tmp.join(", & ") );
                        tmp.length = 0;
                    }
                }
            }

            let output = `\\begin{cases}` + content.join("\\\\") + `\\end{cases}`;
            
            console.log( output);
            return output;
        },
    },
    rule["case8"] = {
        reg: getReg("case8", 8),
        to: (...args) => {
            return rule["case2c"].to( ...args );
        }
    },

    rule["dint"] = {
        reg: getReg("dint", 1),
        to: (base="D") => {
            return `\\iint \\limits_${ base }`;
        }
    };

    rule["int"] = {
        reg: getReg("int", 2),
        to: (base="a", to="b") => {
            return `\\int_{${base}}^{${ to }}`;
        }
    };
}