import React from "react"
import PersonalDataForm3 from "./PersonalDataForm3/PersonalDataForm3"
import s from "./PersonalData3.module.scss"
import { useSelector } from "react-redux"
import { selectIsSuccessSubmitProfile } from "../../../app/app.select"
import ModalWindowStatusSubmitError from "../ModalWindowStatusSubmit/ModalWindowStatusSubmitError/ModalWindowStatusSubmitError"
import ModalWindowStatusSubmitSuccess from "../ModalWindowStatusSubmit/ModalWindowStatusSubmitSuccess/ModalWindowStatusSubmitSuccess"
import ProgressLine from "../Progress/ProgressLine"
import CircleCurrent from "../Progress/CercleCurrent/CircleCurrent"
import CircleTick from "../Progress/CircleTick/CircleTick"


const PersonalData3 = () => {
    const isSuccessStatus = useSelector(selectIsSuccessSubmitProfile)
    return (
        <div className={s.block}>
            <ProgressLine
                backgroundColors={["#5558fa", "#5558fa"]}
                children={[
                    <CircleTick key={1} number={1} />,
                    <CircleTick key={2} number={2} />,
                    <CircleCurrent key={3} number={3} />,
                ]}
            />
            <PersonalDataForm3 />

            {isSuccessStatus === null ? null : isSuccessStatus ? (
                <ModalWindowStatusSubmitSuccess />
            ) : (
                <ModalWindowStatusSubmitError />
            )}
        </div>
    )
}

export default PersonalData3
