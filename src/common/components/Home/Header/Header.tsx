import React from "react"
import s from "./Header.module.scss"
import Avatar from "../Avatar/Avatar"
import SocialMediaList from "../SocialMediaList/SocialMediaList"

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <Avatar />
                <div className={s.header__about}>
                    <h1>Дмитрий Лихачев</h1>
                    <SocialMediaList />
                </div>
            </header>
            <div className={s.line}></div>
        </>
    )
}

export default Header
