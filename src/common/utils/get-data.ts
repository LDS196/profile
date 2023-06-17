import { FormData } from "../components/PersonalData2/PersonalDataForm2/FormPersonalData2"

export const getData = (data: FormData) => {
    const advantages = data?.advantages?.map((el) => el.value)
    const radio = data.radioValue ? Number(data.radioValue) : null
    const formData = {
        radio,
        checkbox: data?.checkboxValue,
        advantages,
    }
    return formData
}
