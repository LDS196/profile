import React from "react"
import s from "./PersonalData.module.scss"
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm"
import CircleCurrent from "../Progress/CercleCurrent/CircleCurrent"
import CircleEmpty from "../Progress/CercleEmpty/CircleEmpty"
import ProgressLine from "../Progress/ProgressLine"
const PersonalData = () => {
    return (
        <div className={s.block}>
            <ProgressLine
                backgroundColors={["rgba(0, 0, 0, 0.08)", "rgba(0, 0, 0, 0.08)"]}
                children={[
                    <CircleCurrent key={1} number={1} />,
                    <CircleEmpty key={2} number={2} />,
                    <CircleEmpty key={3} number={3} />,
                ]}
            />
            <PersonalDataForm />
        </div>
    )
}

export default PersonalData
