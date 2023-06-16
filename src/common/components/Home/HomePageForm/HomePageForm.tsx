import React from "react"
import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import s from "./HomePageForm.module.scss"
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

const HomePageForm = () => {
    const defaultValues = {
        phone: useSelector(selectPhone),
        email: useSelector(selectEmail),
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setProfileData } = appActions

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormData>({
        defaultValues: defaultValues,
        mode: "onBlur",
    })

    const setData = (data: FormData) => {
        if (Object.keys(errors).length === 0) {
            const phone = extractNumbersFromString(data.phone)
            dispatch(setProfileData({ ...data, phone }))
            navigate("/personal-data")
        }
    }
    return (
        <div className={s.form}>
            <div className={s.inputContainer}>
                <Label title={"Номер телефона"} htmlFor={"field-phone"}>
                    <div className={s.inputMask}>
                        <InputMask
                            defaultValue={defaultValues.phone}
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
                        <div className={s.error}>{errors?.phone && <p>{errors?.phone?.message || "Error"}</p>}</div>
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
                        name="email"
                        placeholder={"tim.jennings@example.com "}
                        id="field-email"
                        variant="outlined"
                        fullWidth={true}
                    />
                </Label>
                <div className={s.error}>{errors?.email && <p>{errors?.email?.message || "Error"}</p>}</div>
            </div>

            <Button id={"button-start"} variant="contained" onClick={handleSubmit(setData)}>
                Начать
            </Button>
        </div>
    )
}

export default HomePageForm
