import React from "react";
import Header from "./Components/Header/index";
import CodeEditor from "./Components/Editor/index";
import Console from "./Components/Console/index";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="body">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <CodeEditor />
          </div>
          <div className="col-sm">
            <Console />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
