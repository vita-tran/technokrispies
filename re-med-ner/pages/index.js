<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> d1a3b3ce01cc97e2565ef2e960120847344f02d1
import Head from "next/head";
import Image from "next/image";

// ============================================
// Importing MUI components below
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// ============================================

import NavBar from "../components/NavBar";
<<<<<<< HEAD
=======

>>>>>>> d1a3b3ce01cc97e2565ef2e960120847344f02d1
import ConnectPHP from "./api/ConnectPHP";

// ============================================
// PERSONAL NOTE FOR LATER: did these two lines of code come from the default code
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// ============================================

export default function Home() {
  return (
    <Head>
      <title>Re-Med-Ner</title>
      <ConnectPHP />
    </Head>
  );
}
