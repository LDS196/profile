import React from "react"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useForm, Controller } from "react-hook-form"
import s from "./PersonalDataForm.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { appActions } from "../../../../app/app.reducer"
import { useNavigate } from "react-router-dom"
import Label from "../../Label/Label"
import { selectName, selectNickName, selectSex, selectSurname } from "../../../../app/app.select"

type FormData = {
    nickname: string
    name: string
    surname: string
    sex: string
}

const gender = ["man", "women"]

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
        getValues,
        control,
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm<FormData>({
        defaultValues: defaultValues,
        mode: "onBlur",
    })
    watch()

    const onSubmit = (data: FormData) => {
        if (Object.keys(errors).length === 0) {
            dispatch(setProfileData(data))
            navigate("/personal-data-2")
        }
    }

    const setData = () => {
        dispatch(setProfileData(getValues()))
        navigate("/")
    }

    return (
        <>
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
                        />
                    </Label>

                    <div className={s.error}>{errors?.surname && <p>{errors?.surname?.message || "Error"}</p>}</div>
                </div>
                <div className={s.inputContainer}>
                    <Label title={"Sex"} htmlFor={"field-sex"}>
                        <FormControl fullWidth className={s.formControll}>
                            <InputLabel shrink={false} className={s.inputSelectLabel} id="select-label">
                                {!getValues("sex") && "Не выбрано"}
                            </InputLabel>
                            <Controller
                                name="sex"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        {...register("sex", { required: "Required field" })}
                                        onChange={(val) => onChange(val.target.value)}
                                        labelId="select-label"
                                        error={!!errors.sex && !value}
                                        value={value ? value : ""}
                                        label={null}
                                    >
                                        {gender.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Label>
                    <div className={s.error}>
                        {errors?.sex && !getValues("sex") && <p>{errors?.sex?.message || "Error"}</p>}
                    </div>
                </div>
                <div className={s.buttons}>
                    <Button onClick={() => setData()} id={"button-back"} variant="outlined">
                        Назад
                    </Button>

                    <Button type={"submit"} id={"button-next"} variant="contained">
                        Далее
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PersonalDataForm
