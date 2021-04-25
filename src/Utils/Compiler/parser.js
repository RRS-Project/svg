export function parser (tokens) {
    let AST = {
      type: 'Drawing',
      body: []
    }
    // extract a token at a time as current_token. Loop until we are out of tokens.
    while (tokens.length > 0){
      let current_token = tokens.shift()
  
      // Since number token does not do anything by it self, we only analyze syntax when we find a word.
      if (current_token.type === 'word') {
        switch (current_token.value) {
            case 'Paper' :
            {
                let expression = {
                type: 'CallExpression',
                name: 'Paper',
                arguments: []
              }
              // if current token is CallExpression of type Paper, next token should be color argument
              let argument = tokens.shift()
              if(argument.type === 'number') {
                expression.arguments.push({  // add argument information to expression object
                  type: 'NumberLiteral',
                  value: argument.value
                })
                AST.body.push(expression)    // push the expression object to body of our AST
              }
              break
            }
            case 'Pen':
            {
                let expression = {
                    type: "CallExpression",
                    name: 'Pen',
                    arguments: []
                }

                let args = tokens.shift()
                if(args.type === 'number')
                {
                    expression.arguments.push({
                        type: 'NumberLiteral',
                        value: args.value
                    })
                    AST.body.push(expression);
                }
                break
            }
            case 'Line':
            {
                let expression = {
                    type: "CallExpression",
                    name: 'Line',
                    arguments: []
                }

                let i = 1;
                while(i <= 4)
                {
                    let args = tokens.shift()
                    if(args.type === 'number')
                    {
                        expression.arguments.push({
                            type: 'NumberLiteral',
                            value: args.value
                        }) 
                    }
                    i++;
                }
                AST.body.push(expression);
                break
            }

            case 'Rect':
            {
                let expression = {
                    type: "CallExpression",
                    name: 'Rect',
                    arguments: []
                }

                let i = 1;

                // x, y, width, height, fill -> args
                while(i <= 5)
                {
                    let args = tokens.shift()
                    if(args.type === 'number')
                    {
                        expression.arguments.push({
                            type: 'NumberLiteral',
                            value: args.value
                        }) 
                    }
                    i++;
                }
                AST.body.push(expression);
                break
            }
            
            default:
                break
        }
      }
    }
    return AST
  }