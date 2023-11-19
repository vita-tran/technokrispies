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
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Autocomplete from '@mui/material/Autocomplete';

// ============================================

import HeaderBar from "../components/HeaderBar";
import ConnectPHP from "./api/ConnectPHP";



export default function Home() {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  // const [contactMethod, setContactMethod] = useState('');
  const [contactType, setContactType] = useState('');


  const [formInfo, setFormInfo] = useState({
    firstname: '',
    lastname: '',
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
       <HeaderBar />



      <main> 
        <Container maxWidth="md">
          <Typography variant='h3' sx={{ mb: "1rem"}} textAlign="center">
          Patient Medical Information Form
          </Typography>

            <form
              onSubmit={handleSubmit}>

                  {/* ====================================================== */}
                  {/* PATIENT INFORMATION PORTION HERE */}
                  <Box border={1} sx={{ p: '0.5rem'}} maxWidth="md">
                    <Typography variant="h5" sx={{ width: '100%'}}>
                      Patient Information
        
                    <TextField
                      required
                      name='firstname'
                      id="outlined-required"
                      label="First Name"
                      onChange={handleInputChange}
                      value={formInfo.firstName}
                      sx={{ width: '85%', m: '2rem' }}
                    />

                    <TextField
                      required
                      name='lastname'
                      id="outlined-required"
                      label="Last Name"
                      onChange={handleInputChange}
                      value={formInfo.lastName}
                      sx={{ width: '85%', m: '2rem' }}
                    />

                    <FormControl
                      required
                      component="fieldset" 
                      >
                        <RadioGroup
                          name="contactType"
                          value={formInfo.contactType}
                          onChange={handleInputChange}
                          row
                        >
                          <Typography>
                            Preferred method of notification retrieval:
                          </Typography>
                          <FormControlLabel label="Email" value="email" control={<Radio />} />
                          <FormControlLabel label="Phone" value="phone" control={<Radio />} />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        required
                        name="contact"
                        // MAKE CHANGES FOR DATATYPES BASED OFF OF IF EMAIL OR PHONE RADIO IS CHECKED OFF
                        label="Email OR Phone"
                        onChange={handleInputChange}
                        value={formInfo.contact}
                        sx={{width:'85%', m:'0.2rem 2rem'}}
                        >
                    </TextField>
                    </Typography> 
                    </Box>
                    {/* ====================================================== */}


                    {/* ====================================================== */}
                    {/* MEDICATION INFORMATION PORTION HERE */}
                    <Box border={1} sx={{ p: '0.5rem'}} maxWidth="md">
                    <Typography variant="h5" sx={{ width: '100%'}}>
                    Medication Details
                    </Typography>


                    {/* LOOK UP MEDICATION NAME */}
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      label="Type Medication Name"
                    />





                    <TextField
                      required
                      id="outlined-required"
                      endAdornment={<InputAdornment position="end">mg</InputAdornment>}
                      label="Dosage Amount"
                      sx={{ width: '40%', m: '2rem' }}
                    />



                    </Box>


                    <Button 
                      variant="contained" 
                      size="large"
                    >
                      SUBMIT
                    </Button>
            </form>
        </Container>
      </main>
    </div>

  );
}
