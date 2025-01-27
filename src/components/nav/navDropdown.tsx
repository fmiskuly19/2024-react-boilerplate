import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//im not sure if this is good practice or not, in my project I took this from, I had multiple dropdowns with menus so I didnt want to rewrite anything
//each navdropdown takes its label, an icon, and dropdown content to make it so we can use this class for each dropdown without duplicating code
//some of those menus had clicks in them, and the default bahvior is to close on click, so there is a flag to indicate if we do want the default behavior.
interface NavDropdownProps {
    label: string, //need label for ids of button and menu for anchor
    menuContent: JSX.Element,
    icon?: JSX.Element, //sending an iconbutton as a prop will render the iconbutton instead of the label
    closeOnClick: boolean
}

const NavDropdown = (props: NavDropdownProps) => {

    const theme = useTheme();
    const textColor = theme.palette.mode == 'dark' ? theme.palette.primary.main : theme.palette.primary.contrastText;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickClose = () => {
        if (props.closeOnClick) {
            setAnchorEl(null);
        }
    }

    const getEndIcon = () => {
        return (open ? <KeyboardArrowUpIcon sx={{ color: textColor }} /> : <KeyboardArrowDownIcon sx={{ color: textColor }} />)
    }

    return (
        <>
            {props.icon ?
                <Button
                    id={props.label + '-dropdown-button'}
                    aria-controls={open ? props.label + '-dropdown-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ textTransform: 'none', ":hover": { background: 'rgba(255, 255, 255, .1)' }, borderRadius: '100%', minWidth: '0px', padding: '0px', margin: '0px' }}
                >
                    <IconButton size="small" sx={{ minWidth: '0px' }} color="primary">{props.icon}</IconButton>
                </Button>
                :
                <Button
                    id={props.label + '-dropdown-button'}
                    aria-controls={open ? props.label + '-dropdown-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={getEndIcon()}
                    sx={{ textTransform: 'none', ":hover": { background: 'rgba(255, 255, 255, .1)' } }}
                >
                    <Typography sx={{ color: textColor }}>{props.label}</Typography>
                </Button>
            }
            <Menu
                id={props.label + '-dropdown-menu'}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClickClose}
                MenuListProps={{
                    'aria-labelledby': props.label + '-dropdown-button',
                    'disablePadding': true,
                }}
                sx={{ top: '10px' }}
            >
                {props.menuContent}
            </Menu>
        </>
    )
}

export default NavDropdown;