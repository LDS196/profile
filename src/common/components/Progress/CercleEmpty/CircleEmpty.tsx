import React from "react"
import s from "./CircleEmpty.module.scss"

type Props = {
    number: number
    colorNumber: string
}

const CircleEmpty = ({ number, colorNumber }: Props) => {
    const style = {
        color: colorNumber,
    }
    return (
        <div className={s.circle}>
            <div style={style} className={s.number}>
                {number}
            </div>
        </div>
    )
}

export default CircleEmpty
