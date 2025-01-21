import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  ChakraProvider, SystemContext, } from "@chakra-ui/react"
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={{}as unknown  as SystemContext} > 
      <App />
    </ChakraProvider>
  </StrictMode>,
)

