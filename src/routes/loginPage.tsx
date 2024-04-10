import { useState } from "react";
import { useAppDispatch } from "../hooks";

import { enqueueSnackbar } from "notistack";

import { Box, Button, Divider, OutlinedInput, Paper, Stack, Typography } from "@mui/material";
import { setIsLoggedIn } from "../redux/authSlice";

const LoginPage = () => {

    const dispatch = useAppDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        setUsername('');
        setPassword('');

        dispatch(setIsLoggedIn(true))

        //theoretically you would want the dispatch function to handle show error/success, just doing this for the example
        enqueueSnackbar(`Successfully logged for user ${username}`, { variant: 'success' });
    }

    const hasLoginInfo = () =>{
        return username == "" || password == "";
    }

    return (
        <Box display="flex" sx={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: '80px' }}>
            <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                <Paper elevation={10} sx={{ padding: '20px', borderRadius: '10px', minWidth: '350px' }}>
                    <Stack direction="column" spacing={4} justifyContent="center" alignItems="center">
                        <Typography variant="h4" fontWeight="600">2024 React Boilerplate</Typography>
                        <Typography variant="h6" fontWeight="600">Login Screen Example</Typography>
                        <div>
                            <Stack direction="column" spacing={0.5} justifyContent="center" alignItems="center">
                                <OutlinedInput placeholder="username" size="small" sx={{ width: '85%' }} value={username} onChange={(event) => setUsername(event.target.value as string)} />
                                <OutlinedInput type="password" placeholder="password" size="small" sx={{ width: '85%' }} value={password} onChange={(event) => setPassword(event.target.value as string)} />
                            </Stack>
                        </div>
                        <div>
                            <Button variant="contained" onClick={Login} disabled={hasLoginInfo()}>
                                Login
                            </Button>
                        </div>
                        <Divider />
                    </Stack>
                </Paper>
            </Stack >
        </Box >
    )
}

export default LoginPage;