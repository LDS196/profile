import React from "react"
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm"
import CircleCurrent from "../Progress/CercleCurrent/CircleCurrent"
import CircleEmpty from "../Progress/CercleEmpty/CircleEmpty"
import ProgressLine from "../Progress/ProgressLine"
const PersonalData = () => {
    return (
        <div className="form_container">
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
