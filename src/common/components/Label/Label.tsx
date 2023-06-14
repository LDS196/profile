import React, { ReactNode } from "react"
import s from "./Label.module.scss"

type Props = {
    children: ReactNode
    title: string
    htmlFor: string
}

const Label = ({ htmlFor, title, children }: Props) => {
    return (
        <div className={s.inputBox}>
            <label htmlFor={htmlFor} className={s.label}>
                {title}
            </label>
            {children}
        </div>
    )
}

export default Label
