import { lexer } from "./lexer.js";
import { parser } from "./parser.js";
import { transformer } from "./transformer.js";
import { generator } from "./generator.js";

export function compiler(code)
{
    return generator(transformer(parser(lexer(code))));
}