import Head from 'next/head';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export default function NavBar(){
    return <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr:2 }}
            >
                <MenuIcon />
                
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, ml: '2rem' }}>
                    Re-Med-Ner
                </Typography>
                
            </IconButton>
            
        </Toolbar>
    </AppBar>
}
