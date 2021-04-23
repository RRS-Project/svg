import React from 'react';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./index.css";

export default function CodeEditor()
{
    const [code, setCode] = React.useState(
        `line 100 100\nrect 200 200 100 100`
      );
      
    const [output, setOutput] = React.useState(<></>);

    function generateResult() {
      setOutput(
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect x="0" y="0" width="100" height="100" fill="rgb(0%, 0%, 0%)"></rect>
          <line x1="50" y1="23" x2="22" y2="73" stroke="rgb(100%, 100%, 100%)" stroke-linecap="round"></line>
          <line x1="22" y1="73" x2="78" y2="73" stroke="rgb(100%, 100%, 100%)" stroke-linecap="round"></line>
          <line x1="78" y1="73" x2="50" y2="23" stroke="rgb(100%, 100%, 100%)" stroke-linecap="round"></line>
        </svg>
      );
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
              <div>
                {output}
              </div>
            </div>
          </div>
        </div>
    );
}