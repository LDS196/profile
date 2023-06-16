import React from "react"
import Header from "./Header/Header"
import HomePageForm from "./HomePageForm/HomePageForm"
import s from "./Home.module.scss"

const Home = () => {
    return (
        <div className={s.main}>
            <Header />
            <HomePageForm />
        </div>
    )
}

export default Home
