import Head from "next/head";
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

// export default function NavBar(){
//     return <AppBar position="static">
//         <Toolbar>
//             <IconButton
//                 size="large"
//                 edge="start"
//                 color='inherit'
//                 aria-label="menu"
//                 sx={{ mr:2 }}
//             >
//                 <MenuIcon />
//             </IconButton>
            
//         </Toolbar>
//     </AppBar>
// }

export default function NavBar(props) {
    return <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TECHNOKRISPIES
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  }