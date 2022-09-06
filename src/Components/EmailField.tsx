import React from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { type } from "@testing-library/user-event/dist/type";

type EMFieldProps = {
  id: string
  label: String
  handleChange: any
  defaultValue?: any
}

function EMField(props: EMFieldProps) {
    return (
        <TextField
        required
        id={props.id}
        label={props.label}
        onChange={props.handleChange}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
            className: "usernameField"
          }}
        defaultValue=""
        />
    )
}

export default EMField