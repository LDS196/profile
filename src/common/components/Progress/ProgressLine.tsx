import React from "react"
import s from "./ProgressLine.module.scss"
import CircleTick from "./CircleTick/CircleTick"
import CircleCurrent from "./CercleCurrent/CircleCurrent"
import CircleEmpty from "./CercleEmpty/CircleEmpty"

const ProgressLine = () => {
    return (
        <div className={s.progress}>
            <div className={s.line}>
                <div className={s.first__inner__line}></div>
                <div className={s.second__inner__line}></div>
                <div className={s.first__circle}>
                    <CircleTick number={1} colorNumber={"#5558FA"} />
                </div>
                <div className={s.second__circle}>
                    <CircleCurrent number={2} colorNumber={"#5558FA"} />
                </div>
                <div className={s.third__circle}>
                    <CircleEmpty number={3} colorNumber={"#666666"} />
                </div>
            </div>
        </div>
    )
}

export default ProgressLine
