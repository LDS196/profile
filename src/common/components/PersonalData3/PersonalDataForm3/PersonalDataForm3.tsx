import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAbout } from "../../../../app/app.select"
import { useNavigate } from "react-router-dom"
import { appActions, appThunks } from "../../../../app/app.reducer"
import { useForm } from "react-hook-form"
import s from "./PersonalDataForm3.module.scss"
import Label from "../../Label/Label"
import { Button } from "@mui/material"
import { useActions } from "../../../hooks/useActions"

const PersonalDataForm3 = () => {
    const { fetchProfile } = useActions(appThunks)
    const defaultValues = {
        about: useSelector(selectAbout),
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setProfileData } = appActions

    const {
        getValues,
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm<{ about: string }>({
        defaultValues: defaultValues,
        mode: "onBlur",
    })
    watch()

    const onSubmit = (data: { about: string }) => {
        if (Object.keys(errors).length === 0) {
            dispatch(setProfileData(data))
            fetchProfile({})
        }
    }

    const setData = () => {
        dispatch(setProfileData(getValues()))
        navigate("/personal-data-2")
    }
    watch()
const counter = getValues("about").length
    const styleError = errors.about ? s.inputError : ""

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inputContainer}>
                    <Label title={"About"} htmlFor={"field-about"} subtitle={"Tip"} maxWidth={"680px"}>
                        <textarea
                            className={styleError}
                            {...register("about", {
                                required: "Required field",
                                maxLength: {
                                    value: 200,
                                    message: "Max length 200 symbols",
                                },
                            })}
                            name="about"
                            placeholder={"Placeholder"}
                            id="field-about"
                        />
                    </Label>
                    <div className={s.counter}>{counter}</div>
                    <div className={s.error}>{errors?.about && <p>{errors?.about?.message || "Error"}</p>}</div>
                </div>

                <div className={s.buttons}>
                    <Button onClick={() => setData()} id={"button-back"} variant="outlined">
                        Назад
                    </Button>

                    <Button type={"submit"} id={"button-next"} variant="contained">
                        Отправить
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PersonalDataForm3
