import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type PropsTypeSB = {
  LoginToAccount?: any
}

function SubmitButton(props: PropsTypeSB) {
    return (
        <Stack direction="row" spacing={2} className="submitButton">
          <Button
            onClick={props.LoginToAccount}
            variant="contained">Log In
          </Button>
        </Stack>
    )
}

type PropsTypeSUB = {
    signUpPage: any
}

function SignUpButton(props: PropsTypeSUB) {
    return (
        <Stack direction="row" spacing={2} className="submitButton">
          <Button 
            onClick={props.signUpPage}
            variant="contained">Sign Up
          </Button>
        </Stack>
    )
}

type PropsTypeCAB = {
    CreateAccount?: any
}

function CreateAccountButton(props: PropsTypeCAB) {
    return (
        <Stack direction="row" spacing={2} className="createAccountButton">
          <Button 
            onClick={props.CreateAccount}
            variant="contained">Create Account
          </Button>
        </Stack>
    )
}

type PropsTypeSIB = {
    signUpPage: any
}

function SignIn(props: PropsTypeSIB) {
    return (
        <Stack direction="row" spacing={2} className="submitButton">
          <Button 
            onClick={props.signUpPage}
            variant="contained">Sign In
          </Button>
        </Stack>
    )
}

export default SubmitButton
export { SignUpButton, CreateAccountButton, SignIn }
