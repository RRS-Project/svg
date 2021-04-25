import React from 'react';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import { lexer } from "../../Utils/Compiler/lexer";
import { parser } from "../../Utils/Compiler/parser";
import { transformer } from "../../Utils/Compiler/transformer";
import { generator } from "../../Utils/Compiler/generator";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./index.css";

export default function CodeEditor()
{
    const [code, setCode] = React.useState(
        `Paper 100\nPen 0\nLine 0 0 100 100`
      );
      
    const [output, setOutput] = React.useState(null);

    function generateResult() {
      let lexArray = lexer(code);
      let svg = parser(lexArray);
      let ast_svg = transformer(svg);
      // console.log(ast_svg);
      // console.log(generator(ast_svg));
      let finalSVG = generator(ast_svg);
      setOutput(finalSVG);
    }

    return(
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div style={{boxShadow: '4px 4px 8px #888888', marginTop: '20px'}}>
                <Editor
                  value={code}
                  onValueChange={(code) => setCode(code)}
                  highlight={(code) => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                  }}
                  placeholder="Write some code..."
                  className="container__editor"
                />
              </div>
            </div>
            <div className="col-sm">
              <button className="btn btn-primary" style={{marginTop: '35px'}} onClick={generateResult}>Generate Result</button>
              <br />
              <br />
              <div className="svg-container">
                {output === null ? <></> : <img src={`data:image/svg+xml;utf8,${encodeURIComponent(output)}`} alt="svg-result"/>}
              </div>
            </div>
          </div>
        </div>
    );
}