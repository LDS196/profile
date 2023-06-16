import React from "react"
import s from "./PersonalData2.module.scss"
import { FormPersonalData2 } from "./PersonalDataForm2/FormPersonalData2"

const PersonalData2 = () => {
    return (
        <div className={s.block}>
            <FormPersonalData2 />
        </div>
    )
}

export default PersonalData2
