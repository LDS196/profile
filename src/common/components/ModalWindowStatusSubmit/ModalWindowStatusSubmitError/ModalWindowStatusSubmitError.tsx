import React from "react"
import s from "./ModalWindowStatusSubmitError.module.scss"
import iconError from "../../../../assets/icons/icon-fail.svg"
import iconClose from "../../../../assets/icons/icon-close.svg"
import { Button } from "@mui/material"
import { useActions } from "../../../hooks/useActions"
import { appActions } from "../../../../app/app.reducer"

const ModalWindowStatusSubmitError = () => {
    const { setStatus } = useActions(appActions)
    const onClickHandler = () => {
        setStatus({ status: null })
    }
    return (
        <div className={s.modalWrapper}>
            <div className={s.modal}>
                <div className={s.title}>
                    <p>Ошибка</p>
                    <button onClick={onClickHandler}>
                        <img src={iconClose} alt="" />
                    </button>
                </div>
                <div className={s.icon}>
                    <img src={iconError} alt="" />
                </div>
                <div className={s.button}>
                    <Button onClick={onClickHandler} variant="contained">
                        Закрыть
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindowStatusSubmitError
