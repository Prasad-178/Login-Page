import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

type PropsType = {
    id: string
    label: string
    handleChange: any
    value?: any
    defaultValue?: string
}

function UNField(props: PropsType) {
    return (
        <TextField
        required
        id={props.id}
        label={props.label}
        onChange={props.handleChange}
        value={props.value}
        defaultValue={props.defaultValue}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            className: "usernameField"
          }}
        />
    )
}

export default UNField