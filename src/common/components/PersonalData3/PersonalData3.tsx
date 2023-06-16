import React from "react"
import PersonalDataForm3 from "./PersonalDataForm3/PersonalDataForm3"
import s from "./PersonalData3.module.scss"
import { useSelector } from "react-redux"
import { selectIsSuccessSubmitProfile } from "../../../app/app.select"
import ModalWindowStatusSubmitError from "../ModalWindowStatusSubmit/ModalWindowStatusSubmitError/ModalWindowStatusSubmitError"
import ModalWindowStatusSubmitSuccess from "../ModalWindowStatusSubmit/ModalWindowStatusSubmitSuccess/ModalWindowStatusSubmitSuccess"

const PersonalData3 = () => {
    const isSuccessStatus = useSelector(selectIsSuccessSubmitProfile)
    return (
        <div className={s.block}>
            <PersonalDataForm3 />
            {isSuccessStatus === null ? null : isSuccessStatus ? (
                <ModalWindowStatusSubmitSuccess />
            ) : (
                <ModalWindowStatusSubmitError />
            )}
            {/*<ModalWindowStatusSubmitError />*/}
        </div>
    )
}

export default PersonalData3
