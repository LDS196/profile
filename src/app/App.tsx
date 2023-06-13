import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../common/components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          <Route path={"/"} element={<Main/>} />
          <Route path={"/login"} element={""} />
        </Routes>
      </div>
    </div>
)
}

export default App;
