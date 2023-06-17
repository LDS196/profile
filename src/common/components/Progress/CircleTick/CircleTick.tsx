import React from "react"
import s from "./CircleTick.module.scss"
import iconTick from "../../../../assets/icons/icon-tick.svg"

type Props = {
    number: number
}
const CircleTick = ({ number }: Props) => {
    return (
        <div className={s.circleTick}>
            <img src={iconTick} alt="" />
            <div className={s.number}>{number}</div>
        </div>
    )
}

export default CircleTick
