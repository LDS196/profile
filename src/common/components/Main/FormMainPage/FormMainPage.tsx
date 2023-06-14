import React from "react"
import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import s from "./FormMainPage.module.scss"
import Label from "../../Label/Label"
import { useDispatch, useSelector } from "react-redux"
import { appActions } from "../../../../app/app.reducer"
import { extractNumbersFromString } from "../../../utils/extractNumbersFromString"
import { useNavigate } from "react-router-dom"
import { selectEmail, selectPhone } from "../../../../app/app.select"

type FormData = {
    phone: string
    email: string
}
const textFieldStyle = {
    fontFamily: "sans-serif",
    padding: "13px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
}

const FormMainPage = () => {
    const defaultValues = {
        phone: useSelector(selectPhone),
        email: useSelector(selectEmail),
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setProfileData } = appActions

    const {
        register,
        formState: { errors, isDirty, isValid },
        handleSubmit,
    } = useForm<FormData>({
        defaultValues: defaultValues,
        mode: "onChange" || "onTouched" || "onBlur",
    })

    const onSubmit = (data: FormData) => {
        const phone = extractNumbersFromString(data.phone)
        dispatch(setProfileData({ ...data, phone }))
        navigate("/personal-data")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputContainer}>
                <Label title={"Номер телефона"} htmlFor={"field-phone"}>
                    <div className={s.inputMask}>
                        <InputMask
                            placeholder={"+7 (999) 999-99-99"}
                            mask="+7 (999) 999-99-99"
                            {...register("phone", {
                                required: "Required field",
                                pattern: {
                                    value: /[0-9]/,
                                    message: "Number field",
                                },
                            })}
                        />
                    </div>
                </Label>
            </div>
            <div className={s.inputContainer}>
                <Label title={"Email"} htmlFor={"field-email"}>
                    <TextField
                        {...register("email", {
                            required: "Required field",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email.",
                            },
                        })}
                        error={!!errors.email}
                        name="email"
                        placeholder={"tim.jennings@example.com "}
                        id="field-email"
                        variant="outlined"
                        fullWidth={true}
                        inputProps={{ sx: textFieldStyle }}
                    />
                </Label>
                <div className={s.error}>{errors?.email && <p>{errors?.email?.message || "Error"}</p>}</div>
            </div>

            <Button id={"button-start"} variant="contained" disabled={!isValid || !isDirty} type={"submit"}>
                Начать
            </Button>
        </form>
    )
}

export default FormMainPage
