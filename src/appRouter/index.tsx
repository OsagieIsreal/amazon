import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import Headers from '@/components/Header'
import AuthPage from '@/pages/AuthPage'

// import { lazy } from 'react';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Headers />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    
    ],
  },
  {
    path: '/login',
    element: <AuthPage />
      
  }
])