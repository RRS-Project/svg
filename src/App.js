import React from "react";
import Header from "./Components/Header/index";
import CodeEditor from "./Components/Editor/index";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="body">
      <Header />
      <CodeEditor />
    </div>
  );
}

export default App;
