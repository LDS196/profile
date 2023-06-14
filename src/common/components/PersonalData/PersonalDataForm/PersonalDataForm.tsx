import React from "react"
import { Button, MenuItem, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import s from "./PersonalDataForm.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { appActions } from "../../../../app/app.reducer"
import { Link, useNavigate } from "react-router-dom"
import Label from "../../Label/Label"
import { selectName, selectNickName, selectSex, selectSurname } from "../../../../app/app.select"

type FormData = {
    nickname: string
    name: string
    surname: string
    sex: string
}

const gender = ["man", "women"]

const textFieldStyle = {
    fontFamily: "sans-serif",
    padding: "13px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
}
const PersonalDataForm = () => {
    const defaultValues = {
        nickname: useSelector(selectNickName),
        name: useSelector(selectName),
        surname: useSelector(selectSurname),
        sex: useSelector(selectSex),
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setProfileData } = appActions

    const {
        register,
        watch,
        formState: { errors, isDirty, isValid },
        handleSubmit,
    } = useForm<FormData>({
        defaultValues: defaultValues,
        mode: "onChange" || "onTouched" || "onBlur",
    })
    watch()
    const onSubmit = async (data: FormData) => {
        dispatch(setProfileData(data))
        navigate("/personal-data-2")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputContainer}>
                <Label title={"Nickname"} htmlFor={"field-nickname"} subtitle={"Tip"}>
                    <TextField
                        {...register("nickname", {
                            required: "Required field",
                            maxLength: {
                                value: 30,
                                message: "Max length 30 symbols",
                            },
                            pattern: {
                                value: /^[a-zA-Zа-яА-Я0-9]+$/,
                                message: "Only numbers and letters are allowed",
                            },
                        })}
                        error={!!errors.nickname}
                        name="nickname"
                        placeholder={"Nickname"}
                        id="field-nickname"
                        variant="outlined"
                        fullWidth={true}
                        inputProps={{ sx: textFieldStyle }}
                    />
                </Label>
                <div className={s.error}>{errors?.nickname && <p>{errors?.nickname?.message || "Error"}</p>}</div>
            </div>
            <div className={s.inputContainer}>
                <Label title={"Name"} htmlFor={"field-Name"} subtitle={"Tip"}>
                    <TextField
                        {...register("name", {
                            required: "Required field",
                            maxLength: {
                                value: 50,
                                message: "Max length 50 symbols",
                            },
                            pattern: {
                                value: /^[\p{L}]+$/u,
                                message: "Only letters",
                            },
                        })}
                        error={!!errors.name}
                        name="name"
                        placeholder={"Name"}
                        id="field-name"
                        variant="outlined"
                        fullWidth={true}
                        inputProps={{ sx: textFieldStyle }}
                    />
                </Label>
                <div className={s.error}>{errors?.name && <p>{errors?.name?.message || "Error"}</p>}</div>
            </div>
            <div className={s.inputContainer}>
                <Label title={"Surname"} htmlFor={"field-surname"} subtitle={"Tip"}>
                    <TextField
                        {...register("surname", {
                            required: "Required field",
                            maxLength: {
                                value: 50,
                                message: "Max length 50 symbols",
                            },
                            pattern: {
                                value: /^[a-zA-Zа-яА-Я]+$/,
                                message: "Only letters",
                            },
                        })}
                        error={!!errors.surname}
                        name="surname"
                        placeholder={"Surname"}
                        id="field-surname"
                        variant="outlined"
                        fullWidth={true}
                        inputProps={{ sx: textFieldStyle }}
                    />
                </Label>

                <div className={s.error}>{errors?.surname && <p>{errors?.surname?.message || "Error"}</p>}</div>
            </div>
            <div className={s.inputContainer}>
                <Label title={"Sex"} htmlFor={"field-sex"}>
                    <TextField
                        {...register("sex", { required: "Please enter gender" })}
                        inputProps={{ sx: textFieldStyle }}
                        select
                        fullWidth
                        defaultValue=""
                        placeholder={"Не выбрано"}
                    >
                        {gender.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Label>
            </div>
            <div className={s.buttons}>
                <Link to={"/"}>
                    <Button id={"button-back"} variant="outlined">
                        Назад
                    </Button>
                </Link>

                <Button id={"button-next"} variant="contained" disabled={!isValid || !isDirty} type={"submit"}>
                    Далее
                </Button>
            </div>
        </form>
    )
}

export default PersonalDataForm
