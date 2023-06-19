import React from "react"
import { FormPersonalData2 } from "./PersonalDataForm2/FormPersonalData2"
import ProgressLine from "../Progress/ProgressLine"
import CircleCurrent from "../Progress/CercleCurrent/CircleCurrent"
import CircleEmpty from "../Progress/CercleEmpty/CircleEmpty"
import CircleTick from "../Progress/CircleTick/CircleTick"

const PersonalData2 = () => {
    return (
        <div className="form_container">
            <ProgressLine
                backgroundColors={["#5558fa", "rgba(0, 0, 0, 0.08)"]}
                children={[
                    <CircleTick key={"1"} number={1} />,
                    <CircleCurrent key={"2"} number={2} />,
                    <CircleEmpty key={"3"} number={3} />,
                ]}
            />

            <FormPersonalData2 />
        </div>
    )
}

export default PersonalData2
