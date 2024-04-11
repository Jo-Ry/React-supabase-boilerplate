import { RouterProvider } from 'react-router-dom'
import ClientAuthProvider from './context/ClientAuthProvider'
import ReactDOM from 'react-dom/client'
import router from './routes/routes'
import 'src/styles/main.scss'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientAuthProvider>
			<RouterProvider router={router}/>
		</ClientAuthProvider>
  </React.StrictMode>
)
