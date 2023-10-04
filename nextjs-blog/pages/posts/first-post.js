import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
import Layout from "../../components/layout";
import useSWR from 'swr'
import { useEffect } from "react";
import axios from "axios";


export default function FirstPost() {
  const fetchBooks = async () => {
    const response = await fetch('/api/hello')
    const data = await response.json()
    console.log(data)

  }
  fetchBooks()
    return(
        <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
     
      </Layout>
         )
  }