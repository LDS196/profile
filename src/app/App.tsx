import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "../common/components/Home/Home"
import PersonalData from "../common/components/PersonalData/PersonalData"
import PersonalData2 from "../common/components/PersonalData2/PersonalData2"
import PersonalData3 from "../common/components/PersonalData3/PersonalData3"
import { ErrorSnackbar } from "../common/components/ErrorSnackbar/ErrorSnackbar"
import { LinearProgress } from "@mui/material"
import { useSelector } from "react-redux"
import { selectIsLoading } from "./app.select"

function App() {
    const isLoading = useSelector(selectIsLoading)

    return (
        <div className="App">
            {isLoading && <LinearProgress />}
            <ErrorSnackbar />
            <div className="App-container">
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/personal-data"} element={<PersonalData />} />
                    <Route path={"/personal-data-2"} element={<PersonalData2 />} />
                    <Route path={"/personal-data-3"} element={<PersonalData3 />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
