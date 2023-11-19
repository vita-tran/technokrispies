import Head from "next/head";


// ============================================
// Importing MUI components below
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";


import FormControl from '@mui/material/FormControl';

// ============================================

import NavBar from "../components/NavBar";
import ConnectPHP from "./api/ConnectPHP";

// ============================================
// PERSONAL NOTE FOR LATER: did these two lines of code come from the default code
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// ============================================

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
          sx={{ width: 1 }}>
            
            <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="First Name"
              sx={{ width: '40%', m: '2rem' }}

            />

            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
              sx={{ width: '40%', m: '2rem' }}
            />

            {/*  PHONE NUMBER OR EMAIL HERE  */}

            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
            />




            </div>
        </Box>

      </Container>
    </div>
  );
}
