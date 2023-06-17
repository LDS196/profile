import React from "react"
import s from "./CircleCurrent.module.scss"

type Props = {
    number: number
}
const CircleCurrent = ({ number }: Props) => {
    return (
        <div className={s.circle}>
            <div className={s.circleInner}></div>
            <div className={s.number}>{number}</div>
        </div>
    )
}

export default CircleCurrent
