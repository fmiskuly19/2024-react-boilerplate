import { Box, ListItemIcon, ListItemText, MenuItem, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from "react-router-dom";

const ExampleDropdown = () => {
    const theme = useTheme();
    const textColor = theme.palette.mode == 'dark' ? theme.palette.primary.main : theme.palette.primary.contrastText;

    return (
        <Box sx={{ minWidth: '250px', mt: '8px', mb: '8px' }}>
            <Link to="https://github.com/fmiskuly19/2024-react-boilerplate" style={{textDecoration: 'none', color: textColor}}>
                <MenuItem>
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText>Github</ListItemText>
                    <OpenInNewIcon sx={{ width: '20px', height: '20px' }} />
                </MenuItem>
            </Link>
            <Link to="https://www.linkedin.com/in/frank-miskuly-25b770129/" style={{textDecoration: 'none', color: textColor}}>
                <MenuItem>
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText>LinkedIn</ListItemText>
                    <OpenInNewIcon sx={{ width: '20px', height: '20px' }} />
                </MenuItem>
            </Link>
        </Box>
    )
}

export default ExampleDropdown;