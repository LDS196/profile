import React from "react"
import Header from "./Header/Header"
import FormMainPage from "./FormMainPage/FormMainPage"
import s from "./Main.module.scss"

const Main = () => {
    return (
        <div className={s.main}>
            <Header />
            <FormMainPage />
        </div>
    )
}

export default Main
