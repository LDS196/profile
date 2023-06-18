import React from "react"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { Controller } from "react-hook-form"
import { FormInputProps } from "../../PersonalDataForm2/FormInputProps"

const options = [
    {
        label: "1",
        value: 1,
    },
    {
        label: "2",
        value: 2,
    },
    {
        label: "3",
        value: 3,
    },
]
const style = {
    color: "#333333",
}
export const FormInputRadio: React.FC<FormInputProps> = ({ name, control, label }) => {
    const generateRadioOptions = () => {
        return options.map((singleOption) => (
            <FormControlLabel
                key={singleOption.label}
                value={singleOption.value}
                label={singleOption.label}
                control={<Radio />}
            />
        ))
    }

    return (
        <FormControl component="fieldset">
            <FormLabel style={style} component="legend">
                {label}
            </FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                    <RadioGroup value={value} onChange={onChange}>
                        {generateRadioOptions()}
                    </RadioGroup>
                )}
            />
        </FormControl>
    )
}
