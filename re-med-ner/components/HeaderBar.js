import Head from 'next/head';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export default function HeaderBar(){
        return <AppBar position="static" sx={{ height:'17rem'}}>
                <Toolbar sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: "#81c784",
                    }}>
                        <Typography
                        variant="h2"
                        component="div"
                        sx={{ flexGrow: 1, ml: '2rem' }}>
                            Re-Med-Ner
                        </Typography>

                        <Typography
                        variant="h6"
                        component="div">
                            So you never have to worry about forgetting to take your medication again
                        </Typography>
                </Toolbar>
            </AppBar>


// return <Toolbar 
// position="static" 
// sx={{
//   height:'17rem',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   backgroundColor: "#81c784",
// }}>

//     <Typography
//       variant="h2"
//       component="div"
//       sx={{ flexGrow: 1, ml: '2rem' }}>
//         Re-Med-Ner
//     </Typography>

//     <Typography
//     variant="h6"
//     component="div">
//         So you never have to worry about forgetting to take your medication again
//     </Typography>

// </Toolbar>
}
