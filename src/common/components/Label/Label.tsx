import React, { ReactNode } from "react"
import s from "./Label.module.scss"

type Props = {
    children: ReactNode
    title: string
    htmlFor: string
    subtitle?: string
    maxWidth?: string
}

const Label = ({ htmlFor, subtitle, maxWidth, title, children }: Props) => {
    return (
        <div className={s.inputBox} style={{ maxWidth: maxWidth }}>
            <label htmlFor={htmlFor} className={s.label}>
                {title}
            </label>
            {subtitle && (
                <label htmlFor={htmlFor} className={s.sublabel}>
                    {subtitle}
                </label>
            )}
            {children}
        </div>
    )
}

export default Label
