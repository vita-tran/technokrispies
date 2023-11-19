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

// ============================================

import NavBar from "../components/NavBar";
import ConnectPHP from "./api/ConnectPHP";


export default function Home() {
  return (
    <div>

      <Head>
        <title>Re-Med-Ner</title>
        <meta name="description" content="Medication Reminder App" />
      </Head>

      {/* Here is where I am going to put the component for PHP */}
      <ConnectPHP />
      <NavBar />

      <Container sx={{paddingTop:2}} component="main" maxWidth="lg">
        <Typography variant="h4">
          User Medical Information Form
        </Typography>

        <Box
          component="form"
          sx={{ width: 1}}>
            
            <div>
            {/* ====================================================== */}
            {/* PATIENT INFORMATION PORTION HERE */}
            <Typography variant="h6" sx={{ width: '100%', m: '2rem 0rem' }}>
              Patient Information

            <TextField
              required
              id="outlined-required"
              label="First Name"
              sx={{ width: '40%', m: '2rem' }}
            />

            <TextField
              required
              id="outlined-required"
              label="Last Name"
              sx={{ width: '40%', m: '2rem' }}
            />

            {/*  PHONE NUMBER OR EMAIL HERE  */}
            </Typography>
            {/* ====================================================== */}



            {/* ====================================================== */} 
            {/* MEDICATION INFORMATION PORTION HERE */}
            <Typography variant="h6" sx={{ width: '100%', m: '2rem 0rem' }}>
            Medication Details
  
            <TextField
              required
              id="outlined-required"
              endAdornment={<InputAdornment position="end">mg</InputAdornment>}
              label="Dosage Amount"
              sx={{ width: '40%', m: '2rem' }}
            />

            <TextField
              required
              id="">

            </TextField>
            </Typography>
            {/* ====================================================== */}


            </div>
        </Box>

      </Container>
    </div>
  );
}
