import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";

// ============================================
// Importing MUI components below
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// ============================================

import HeaderBar from "../components/HeaderBar";
import ConnectPHP from "./api/ConnectPHP";



export default function Home() {

  const [formInfo, setFormInfo] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    drug: ''
  });

  const [medicationName, setMedicationName] = useState("ibuprofen");
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e18ee514e1mshacef6bb11eea80ep1896f1jsn8cce74cfacc1',
      'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
    }
  }

  // FORM FUNCTIONS 
  const handleSubmit = (event) => { 
    event.preventDefault()
    console.log("testing submitting form")
    // add validation for alert if any input is not given in form
    window.alert("Form Successfully Submitted")
  }

  const handleInputChange = () => {
    console.log("Inside of the handleInputChange function")
  }

  // TESTING ANOTHER MEDICATION FETCH
  const getGenericName = (drugName) => {
    const DRUG_URL = `https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${drugName}`;

    const rapidAPIKey = 'e18ee514e1mshacef6bb11eea80ep1896f1jsn8cce74cfacc1'

    return fetch(DRUG_URL, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then(response => response.json())
      .then(data => data.generic_name);
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
        <Container maxWidth="md" sx={{backgroundColor:"#686e65", padding:'2rem', borderRadius:'5rem'}}>
          <Typography variant='h3' sx={{ mb: "1rem", color: "white"}} textAlign="center">
          Patient Medical Information Form
          </Typography>

            <form
              onSubmit={handleSubmit}>

                  {/* ====================================================== */}
                  {/* PATIENT INFORMATION PORTION HERE */}
                  <Box border={1} borderColor="white" borderRadius="2rem" sx={{ p: '2.5rem', m: '2rem'}} maxWidth="md">
                    <Typography variant="h5" sx={{ width: '100%', color: "white"}}>
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
                          {/* <Typography>
                            Preferred method of notification retrieval:
                          </Typography> */}
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
                    <Box border={1} borderColor="white" borderRadius="2rem" sx={{ p: '2.5rem', m: '2rem'}} maxWidth="md">
                    <Typography variant="h5" sx={{ width: '100%',color: "white"}}>
                    Medication Details
                    </Typography>

                    <TextField
                      required
                      name='drugName'
                      id="outlined-required"
                      label="Search Drug Name..."
                      onChange={handleInputChange}
                      value={formInfo.drugName}
                      sx={{ width: '85%', m: '2rem' }}
                    />

                    <TextField
                      required
                      name='dosage'
                      id="outlined-required"
                      endAdornment={<InputAdornment position="end">mg</InputAdornment>}
                      label="Dosage Amount"
                      sx={{ width: '40%', m: '2rem' }}
                    />

                    </Box>

                    <Button 
                      variant="contained" 
                      onClick={handleSubmit}
                      sx={{ width: '50%', height: '5rem', backgroundColor: '#686e65', ml: '25%', color:"white"}}
                      className='btn'
                    >
                      SUBMIT
                    </Button>
            </form>
        </Container>
      </main>
    </div>

  );
}
