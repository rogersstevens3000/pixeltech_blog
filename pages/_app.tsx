import '../styles/globals.scss'
// import React , { useEffect  } from 'react';
import {Layout} from '../components';
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { useEffect , useState} from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  
  )
}

export default MyApp
