import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';

import { Box, AppBar as MuiAppBar, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import TonalityIcon from '@mui/icons-material/Tonality';
import PersonIcon from '@mui/icons-material/Person';

import boilerPlateLogo from '../../assets/react-icon.png'
import ThemeDropdown from './themeDropdown';
import ExampleDropdown from './exampleDropdown';
import AccountDropdown from './accountDropdown';
import NavDropdown from './navDropdown';

const Navbar = () => {

  const theme = useTheme();
  const textColor = theme.palette.mode == 'dark' ? theme.palette.primary.main : theme.palette.primary.contrastText;

  const isLoggedIn = useAppSelector((state) => state.authSlice.isLoggedIn);
  const [userLoginStatus, setUserLoginStatus] = useState(isLoggedIn)

  useEffect(() => {
    console.log(`login status changed to ${isLoggedIn}`)
    setUserLoginStatus(isLoggedIn);
  }, [isLoggedIn])

  return (

    userLoginStatus ?
      <MuiAppBar position="sticky">
        <Stack direction="row" justifyContent="space-between">
          <Toolbar variant="dense" disableGutters>
            <Stack direction="row" alignItems="center" spacing={2} pl='5px'>
              <Stack direction='row' spacing={2}>
                <img src={boilerPlateLogo} height="30px" />
                <Link to="/" style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>
                  <Typography variant="h5" fontWeight="bold" fontFamily="Helvetica" sx={{ textDecoration: 'none', color: textColor }} >2024 React Boilerplate</Typography>
                </Link>
              </Stack>
              <Stack direction='row' spacing={2} sx={{ ml: '10px' }}>
                <Link to="/Info" style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>
                  <Typography sx={{ textDecoration: 'none', color: textColor }} >Info</Typography>
                </Link>

                <Link to="/About" style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>
                  <Typography sx={{ textDecoration: 'none', color: textColor }} >About</Typography>
                </Link>
                <Link to="/Contact" style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>
                  <Typography sx={{ textDecoration: 'none', color: textColor }} >Contact</Typography>
                </Link>
              </Stack>
              <NavDropdown label="Dropdown Example" menuContent={<ExampleDropdown />} closeOnClick={true} />
            </Stack>
          </Toolbar>

          <Toolbar variant="dense">
            <Stack direction="row" alignItems="center" spacing={1}>
              <NavDropdown label="Theme" menuContent={<ThemeDropdown />} icon={<TonalityIcon sx={{ color: textColor }} />} closeOnClick={false} />
              <NavDropdown label="Account" menuContent={<AccountDropdown />} icon={<PersonIcon sx={{ color: textColor }} />} closeOnClick={false} />
            </Stack>
          </Toolbar>
        </Stack>

      </MuiAppBar>
      :
      <>
        <MuiAppBar position="sticky">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Toolbar variant="dense" disableGutters>
              <Stack direction="row" alignItems="center" spacing={1} pl='5px'>
                <Stack direction='row' spacing={1}>
                  <img src={boilerPlateLogo} height="30px" />
                  <Link to="/" style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>
                    <Typography variant="h5" fontWeight="bold" fontFamily="Helvetica" sx={{ textDecoration: 'none', color: textColor }} >2024 React Boilerplate</Typography>
                  </Link>
                </Stack>
              </Stack>
            </Toolbar>
            <Toolbar variant="dense">
              <Stack direction="row" alignItems="center" spacing={1}>
                <NavDropdown label="Theme" menuContent={<ThemeDropdown />} icon={<TonalityIcon sx={{ color: textColor }} />} closeOnClick={false} />
              </Stack>
            </Toolbar>
          </Box>
        </MuiAppBar>
      </>
  );
};

export default Navbar;