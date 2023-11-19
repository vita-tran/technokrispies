<<<<<<< HEAD
import Link from 'next/link'
import Head from 'next/head';
=======
import Head from "next/head";
>>>>>>> 2e31b0885e9092e6e3d59c69d0d0a350d884724c
import Image from "next/image";

// ============================================
// Importing MUI components below
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// ============================================

<<<<<<< HEAD
import NavBar from '../components/NavBar';

=======
import NavBar from "@components/NavBar";
import ConnectPHP from "./api/ConnectPHP";
>>>>>>> 2e31b0885e9092e6e3d59c69d0d0a350d884724c

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
