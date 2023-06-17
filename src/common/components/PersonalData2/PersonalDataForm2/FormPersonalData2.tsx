import { useForm } from "react-hook-form"
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox/FormInputMultiCheckbox"
import { FormInputRadio } from "../form-components/FormInputRadio/FormInputRadio"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { FormInputMultiText } from "../form-components/FormInputText/FormInputMultiText"
import s from "./FormPersonalData2.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectAdvantages, selectCheckbox, selectRadio } from "../../../../app/app.select"
import { createArrayWithValue } from "../../../utils/create-array-with-value"
import { appActions } from "../../../../app/app.reducer"
import { getData } from "../../../utils/get-data"

export type FormData = {
    advantages: { value: string }[]
    radioValue: null | number
    checkboxValue: number[]
}

const defaultNumberInputText = 3

export const FormPersonalData2 = () => {
    const radioValue = useSelector(selectRadio)
    const advantages = useSelector(selectAdvantages)
    const checkboxValue = useSelector(selectCheckbox)

    const dispatch = useDispatch()
    const { setProfileData } = appActions
    const navigate = useNavigate()

    let advantagesForInput = createArrayWithValue(advantages, defaultNumberInputText)

    const defaultValues = {
        advantages: advantagesForInput,
        radioValue: radioValue,
        checkboxValue: checkboxValue,
    }
    const methods = useForm<FormData>({ defaultValues: defaultValues, mode: "onChange" || "onTouched" || "onBlur" })
    const {
        getValues,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        register,
    } = methods

    const onSubmit = (data: FormData) => {
        if (Object.keys(errors).length === 0) {
            const formData = getData(data)
            dispatch(setProfileData(formData))
            navigate("/personal-data-3")
        }
    }
    const setData = () => {
        const formData = getData(getValues())
        dispatch(setProfileData(formData))
        navigate("/personal-data")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputContainer}>
                <FormInputMultiText
                    errors={errors}
                    register={register}
                    control={control}
                    name={"advantages"}
                    label={"Advantages"}
                />
            </div>

            <div className={s.inputContainer}>
                <FormInputRadio name={"radioValue"} control={control} label={"Radio group"} />
            </div>

            <div className={s.inputContainer}>
                <FormInputMultiCheckbox
                    checkboxValue={defaultValues.checkboxValue}
                    control={control}
                    setValue={setValue}
                    name={"checkboxValue"}
                    label={"Checkbox group"}
                />
            </div>

            <div className={s.buttons}>
                <Button onClick={setData}>Назад</Button>
                <Button variant={"contained"} type={"submit"}>
                    Далее
                </Button>
            </div>
        </form>
    )
}
