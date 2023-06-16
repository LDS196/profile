import React from "react"
import s from "./ModalWindowStatusSubmitSuccess.module.scss"
import iconSuccess from "../../../../assets/icons/icon-success.svg"
import { Button } from "@mui/material"

const ModalWindowStatusSubmitSuccess = () => {
    return (
        <div className={s.modalWrapper}>
            <div className={s.modal}>
                <p className={s.title}>Форма успешно отправлена</p>
                <div className={s.icon}>
                    <img src={iconSuccess} alt="" />
                </div>
                <Button variant="contained" href={"/"}>
                    {" "}
                    На главную
                </Button>
            </div>
        </div>
    )
}

export default ModalWindowStatusSubmitSuccess
