import Head from "next/head";
// import Image from "next/image";

// ============================================
// Importing MUI components below
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
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
    </div>
  );
}
