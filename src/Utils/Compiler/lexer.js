// We split the words in a line, and assign them the types of either a number / word

export function lexer (code) {
    // regular expression for a space
    return code.split(/\s+/)
            .filter(function (t) { return t.length > 0 }) // only considers elements whose length > 0
            
            // for each element, assigns a type of either a number or word
            .map(function (t) {
                return isNaN(t)
                ? {type: 'word', value: t}
                : {type: 'number', value: t}
            }
        )
    }