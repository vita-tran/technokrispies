import {useState, useEffect} from 'react'

import Head from "next/head";


// ============================================
// Importing MUI components below
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
import Select from '@mui/material/Select';

// ============================================

import NavBar from "../components/NavBar";
import ConnectPHP from "./api/ConnectPHP";



export default function Home() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  // const [contactMethod, setContactMethod] = useState('');
  const [contactType, setContactType] = useState('');

  const [formInfo, setFormInfo] = useState({
    firstName: '',
    lastName: '',
    contact: ''
  });



  // FORM FUNCTIONS 
  const handleSubmit = (event) => { 
    event.preventDefault()
    console.log("testing submitting form")
  }

  const handleInputChange = () => {
    console.log("Inside of the handleInputChange function")
  }


  return (
    <div>
      <Head>
          <title>Re-Med-Ner</title>
          <meta name="description" content="Medication Reminder App" />
      </Head>

      {/* Here is where I am going to put the component for PHP 
       Just validating that the backend works*/}
       <ConnectPHP />
       <NavBar />

      <form
        onSubmit={handleSubmit}>

             {/* ====================================================== */}
             {/* PATIENT INFORMATION PORTION HERE */}
             <Box border={1} sx={{ p: '1rem'}}>
               <Typography variant="h6" sx={{ width: '100%', m: '2rem 0rem' }}>
                 Patient Information

               <TextField
                 required
                 name='firstname'
                 id="outlined-required"
                 label="First Name"
                 onChange={handleInputChange}
                 value={formInfo.firstName}
                 sx={{ width: '40%', m: '2rem' }}
               />

               <TextField
                 required
                 name='lastname'
                 id="outlined-required"
                 label="Last Name"
                 onChange={handleInputChange}
                 sx={{ width: '40%', m: '2rem' }}
               />
               
               </Typography> 
              </Box>
      </form>
    </div>



//       <main>
//       <Container sx={{paddingTop:2}} component="main" maxWidth="lg">
//         <Typography variant="h4">
//           User Medical Information Form
//         </Typography>

//         <Box
//           component="form"
//           sx={{ width: 1}}>
      


//               {/*  PHONE NUMBER OR EMAIL HERE  */}

//               <InputLabel>{contactType === 'phone' ? 'Phone Number' : 'Email'}</InputLabel>
              
//               {/* <TextField
//                 type={contactType === 'phone' ? 'telephone' : 'email'}
//                 name="contact"
//                 value={contact}
//                 onChange={handleInputChange}
//               /> */}

// {/* 
//               <Select
//                 value={contactType}
//                 onChange={handleContactTypeChange}>
//                   <MenuItem value="phone">Phone</MenuItem>
//                   <MenuItem value="email">Email</MenuItem>
//               </Select> */}


//               </Typography>
//             </Box>
//             {/* ====================================================== */}



//             {/* ====================================================== */} 
//             {/* MEDICATION INFORMATION PORTION HERE */}
//             <Typography variant="h6" sx={{ width: '100%', m: '2rem 0rem' }}>
//             Medication Details
  
//             <TextField
//               required
//               id="outlined-required"
//               endAdornment={<InputAdornment position="end">mg</InputAdornment>}
//               label="Dosage Amount"
//               sx={{ width: '40%', m: '2rem' }}
//             />

//             {/* <TextField
//               required
//               id="">

//             </TextField> */}
//             </Typography>
//             {/* ====================================================== */}


//             <Button 
//               type='submit'
//             >
//               Submit
//             </Button>
//         </Box>

//       </Container>
//       </main>
//     </div>
  );
}
