import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';

type PropsType = {
    id: string
    label: String
    defaultValue?: string
    handleChange: any
}

function PSField(props: PropsType) {
    return (
        <TextField
        required
        id={props.id}
        label={props.label}
        type="password"
        // autoComplete="current-password"
        onChange={props.handleChange}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            className: "passwordField"
          }}
        inputProps={{ 
            className: "passwordField"
        }}
        />  
    )
}

export default PSField