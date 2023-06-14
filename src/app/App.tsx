import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Main from "../common/components/Main/Main"
import PersonalData from "../common/components/PersonalData/PersonalData"

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <Routes>
                    <Route path={"/"} element={<Main />} />
                    <Route path={"/personal-data"} element={<PersonalData />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
