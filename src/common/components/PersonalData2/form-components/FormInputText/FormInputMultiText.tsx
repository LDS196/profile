import React from "react"
import { useFieldArray } from "react-hook-form"
import { FormInputProps } from "../../PersonalDataForm2/FormInputProps"
import { Button, FormLabel, TextField } from "@mui/material"
import s from "./FormInputMultiText.module.scss"
import DeleteIcon from "@mui/icons-material/Delete"

const style = {
    color: "#333333",
}

export const FormInputMultiText = ({ name, errors, control, register, label }: FormInputProps) => {
    const { fields, append, remove } = useFieldArray({ control, name: name })

    return (
        <>
            <FormLabel style={style} component="legend">
                {label}
            </FormLabel>
            <ul className={s.inputList}>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id} className={s.inputItem}>
                            <div className={s.textField}>
                                <TextField
                                    helperText={
                                        errors ? errors.advantages && errors.advantages[index]?.value.message : null
                                    }
                                    {...register(`advantages.${index}.value` as const, {
                                        required: "Required field",
                                        pattern: {
                                            value: /^[a-zA-Zа-яА-Я]+$/,
                                            message: "Only letters",
                                        },
                                    })}
                                    fullWidth
                                    type={"text"}
                                    variant="outlined"
                                    placeholder={"Enter your advantage"}
                                    error={!!(errors?.advantages && errors?.advantages[index]?.value.message)}
                                />
                            </div>
                            <button type="button" onClick={() => remove(index)}>
                                <DeleteIcon color={"disabled"} />
                            </button>
                        </li>
                    )
                })}
            </ul>
            <Button onClick={() => append("")} variant="outlined">
                +
            </Button>
        </>
    )
}
