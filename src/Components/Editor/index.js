import React from 'react';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import { compiler } from "../../Utils/Compiler/index";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CodeEditor()
{

  const classes = useStyles();
  const [font, setFont] = React.useState(14);

  const handleChange = (event) => {
    setFont(event.target.value);
  };

    const [code, setCode] = React.useState(
        `Paper 100\nPen 0\nLine 0 0 100 100`
      );
      
    const [output, setOutput] = React.useState(null);

    function generateResult() {

      if(code === '') {
        setOutput(null);
      }
      else{
        let finalSVG = compiler(code);
        setOutput(finalSVG);
      }
    }

    function downloadSVG()
    {
      const element = document.createElement("a");
      const file = new Blob([output], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "svg-code.txt";// Required for this to work in FireFox
      element.click();
    }

    return(
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="editor-options" style={{marginBottom: '20px'}}>
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Font Size</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={font}
                      onChange={handleChange}
                    >
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={18}>18</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div style={{boxShadow: '4px 4px 8px #888888'}}>
                <Editor
                  value={code}
                  onValueChange={(code) => setCode(code)}
                  highlight={(code) => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: font,
                  }}
                  placeholder="Write some code..."
                  className="container__editor"
                />
              </div>
              <div>
                <button className="btn btn-primary" style={{marginTop: '25px', marginBottom: '20px'}} onClick={generateResult}>Compile</button>
                <button className="btn btn-warning" style={{marginTop: '25px', marginBottom: '20px', marginLeft: '15px', display: output === null ? 'none' : null}} onClick={downloadSVG}>Download SVG</button>
              </div>
            </div>
            <div className="col-sm">
              <div className="svg-container">
                {output === null ? <></> : <img src={`data:image/svg+xml;utf8,${encodeURIComponent(output)}`} alt="svg-result" style={{marginBottom: '25px'}}/>}
              </div>
            </div>
          </div>
        </div>
    );
}