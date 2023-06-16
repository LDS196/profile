import React, { useEffect, useState } from "react"
import { Checkbox, FormControl, FormControlLabel, FormLabel } from "@mui/material"
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

export const FormInputMultiCheckbox: React.FC<FormInputProps> = ({ name, control, setValue, label, checkboxValue }) => {
    const [selectedItems, setSelectedItems] = useState<number[]>(checkboxValue as number[])
    const handleSelect = (value: number) => {
        const isPresent = selectedItems.indexOf(value)
        if (isPresent !== -1) {
            const remaining = selectedItems.filter((item) => item !== value)
            setSelectedItems(remaining)
        } else {
            setSelectedItems((prevItems) => [...prevItems, value])
        }
    }

    useEffect(() => {
        setValue(name, selectedItems)
    }, [selectedItems])

    return (
        <FormControl size={"small"} variant={"outlined"}>
            <FormLabel component="legend">{label}</FormLabel>

            <div style={{ display: "flex", flexDirection: "column" }}>
                {options.map((option) => {
                    return (
                        <FormControlLabel
                            control={
                                <Controller
                                    name={name}
                                    render={({}) => {
                                        return (
                                            <Checkbox
                                                checked={selectedItems.includes(option.value)}
                                                onChange={() => handleSelect(option.value)}
                                            />
                                        )
                                    }}
                                    control={control}
                                />
                            }
                            label={option.label}
                            key={option.value}
                        />
                    )
                })}
            </div>
        </FormControl>
    )
}
