import React from "react"
import s from "./PersonalData.module.scss"
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm"
const PersonalData = () => {
    return (
        <div className={s.block}>
            <PersonalDataForm />
        </div>
    )
}

export default PersonalData
