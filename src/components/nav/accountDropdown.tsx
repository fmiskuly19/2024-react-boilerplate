import { useAppDispatch } from "../../hooks";
import { Box, MenuItem } from "@mui/material";
import { setIsLoggedIn } from "../../redux/authSlice";
import { enqueueSnackbar } from "notistack";

const AccountDropdown = () => {

    const dispatch = useAppDispatch();

    const Logout = () => {
        dispatch(setIsLoggedIn(false));
        enqueueSnackbar(`Successfully logged out`, { variant: 'success' });
    }

    return (
        <Box sx={{ mt: '8px', mb: '8px' }}>
            <MenuItem onClick={Logout}>
                Logout
            </MenuItem>
        </Box>
    )
}

export default AccountDropdown;