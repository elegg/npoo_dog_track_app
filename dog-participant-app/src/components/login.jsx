import { useState } from "react";

import {
    Anchor,
    Button,
    Checkbox,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
    Stack
} from '@mantine/core';
import classes from '../styles/auth.module.css'

import { $router } from "../api/routes/route";
import { $me } from "../api/me/store";
import { openPage } from "@nanostores/router";

export function Login() {

    let [{password, username}, setUserInfo] = useState({password:"", username:""})

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form}>
                <Stack p="lg">
                    <Title fw="400" order={2} c="cyan.6">
                        Cog-Dogs!
                    </Title>
                    <Text>The app for tracking dog research at the University of Rijeka</Text>
                </Stack>
                <Stack p="lg">

                    <TextInput label="Email address" id="email" onChange={(e)=>setUserInfo((p)=>({...p, username:e.target.value}))}placeholder="hello@gmail.com" size="md" radius="md" />
                    <PasswordInput label="Password" id="password" placeholder="Your password" mt="md" size="md" radius="md" onChange={(e)=>setUserInfo((p)=>({...p, password:e.target.value}))}/>
                    <Checkbox label="Keep me logged in" mt="xl" size="md" />
                    <Button component="a" href="./dashboard"
                        fullWidth mt="xl" size="md" radius="md"


                        onClick={


                            async () => {
                                



                                let x = await fetch('http://localhost:3000/api/users/login', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            email: username ,
                                            password: password,
                                        }),
                                    })
                                        .then(async (req) => await req.json())
                                        //.then(x=>{$me.set(req)})

                                        if(x){
                                        $me.set(x)
                                        openPage($router, "dashboard")

                                        }
                                       
                                        
                            }}


                            







                    >
                        Login
                    </Button>

                    <Text ta="center" mt="md">
                        Don&apos;t have an account?{' '}
                        <Anchor href="#" fw={500} onClick={(event) => event.preventDefault()}>
                            Register
                        </Anchor>

                    </Text>
                </Stack>

            </Paper>
        </div>
    );
}




