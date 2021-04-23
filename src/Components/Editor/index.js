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

    return(
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
    );
}