import React, { useState } from "react";
import Box from '@mui/material/Box';
import Head from "./Heading";
import UNField from "./UsernameField";
import PSField from "./PasswordField";
import { SignUpHead } from "./Heading";
import SubmitButton from "./SubmitButtons";
import { SignUpButton } from "./SubmitButtons";
import EMField from "./EmailField";
import GenderSelect from "./GenderInput";
import { CreateAccountButton } from "./SubmitButtons";
import { SignIn } from "./SubmitButtons";

function Card() {

    const [login, setLoginOrSignUp] = useState(true)

    interface NUType {
        username: string
        password: string
        email: string
        gender: string
    }
    const [newUser, setNewUser] = useState<NUType>({
        username: "",
        password: "",
        email: "",
        gender: "Other"
    })

    interface EXUser {
        username: string
        password: string
    }
    const [existingUser, getExistingUser] = useState<EXUser>({
        username : "",
        password : ""
    })

    function handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        login ? getExistingUser({...existingUser, username: event.target.value}) : setNewUser({...newUser, username: event.target.value})
        console.log(newUser.username)
    }

    function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        login ? getExistingUser({...existingUser, password: event.target.value}) : setNewUser({...newUser, password: event.target.value})
        console.log(newUser.password)
    }

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser({...newUser, email: event.target.value})
        console.log(newUser.email)
    }

    function handleGender(event: React.ChangeEvent<HTMLSelectElement>) {
        setNewUser({...newUser, gender: event.target.value})
        console.log(newUser.gender)
        event.preventDefault()
    }

    function signUpToggle(event: React.MouseEvent<HTMLButtonElement>) {
        setLoginOrSignUp(!login)
        event?.preventDefault()
    }

    function accountCreated() {
        console.log(newUser.username, newUser.password, newUser.email, newUser.gender)
    }

    function signedIn() {
        console.log(existingUser.username, existingUser.password)
    }

    return (
        login ? 
        <div>
            <Box className="loginCard">
                <Head />
                <UNField id="outline-required" label="Username" handleChange={handleUsername}/>
                <PSField id="outline-required" label="Password" handleChange={handlePassword}/>
                <SubmitButton LoginToAccount={signedIn} />
                <p className="newToCF">New to CommerceFox?</p>
                <SignUpButton 
                signUpPage={signUpToggle}
                />
            </Box>
        </div>
        :
        <div>
            <Box className="signUpCard">
                <SignUpHead />
                <UNField id="outline-required" label="username" handleChange={handleUsername} defaultValue=""/>
                <PSField id="outline-required" label="Password" defaultValue="" handleChange={handlePassword}/>
                <EMField id="outline-required" label="email" defaultValue="" handleChange={handleEmail} />
                <GenderSelect 
                handleGender={handleGender}
                />
                <CreateAccountButton 
                CreateAccount={accountCreated}
                />
                <p className="newToCF">New to CommerceFox?</p>
                <SignIn 
                signUpPage={signUpToggle}
                />
            </Box>
        </div>
        
    )

    
}

export default Card