import React from "react"
import s from "./CircleTick.module.scss"
import iconTick from "../../../../assets/icons/icon-tick.svg"

type Props = {
    number: number
    colorNumber: string
}
const CircleTick = ({ number, colorNumber }: Props) => {
    const style = {
        color: colorNumber,
    }
    return (
        <div className={s.circleTick}>
            <img src={iconTick} alt="" />
            <div style={style} className={s.number}>
                {number}
            </div>
        </div>
    )
}

export default CircleTick
