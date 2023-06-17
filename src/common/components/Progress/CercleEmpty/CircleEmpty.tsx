import React from "react"
import s from "./CircleEmpty.module.scss"

type Props = {
    number: number
}

const CircleEmpty = ({ number }: Props) => {
    return (
        <div className={s.circle}>
            <div className={s.number}>{number}</div>
        </div>
    )
}

export default CircleEmpty
