import React from "react"
import s from "./CircleCurrent.module.scss"

type Props = {
    number: number
    colorNumber: string
}
const CircleCurrent = ({ number, colorNumber }: Props) => {
    const style = {
        color: colorNumber,
    }
    return (
        <div className={s.circle}>
            <div className={s.circleInner}></div>
            <div style={style} className={s.number}>
                {number}
            </div>
        </div>
    )
}

export default CircleCurrent
