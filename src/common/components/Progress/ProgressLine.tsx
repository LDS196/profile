import React, { ReactNode } from "react";
import s from "./ProgressLine.module.scss"


type Props={
   backgroundColors:string[]
  children: ReactNode[]
}
const ProgressLine = ({backgroundColors,children}:Props) => {


    return (
        <div className={s.progress}>
            <div className={s.line}>
                <div className={s.line_item} style={{background:backgroundColors[0]}}></div>
                <div className={s.line_item} style={{background:backgroundColors[1]}}></div>
                <div className={s.first__circle}>
                  {children[0]}
                </div>
                <div className={s.second__circle}>
                  {children[1]}
                </div>
                <div className={s.third__circle}>
                  {children[2]}
                </div>
            </div>
        </div>
    )
}

export default ProgressLine
