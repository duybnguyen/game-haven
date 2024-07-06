import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home/Home'
import PlayDice from './routes/PlayDice/PlayDice'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/play-dice",
    element: <PlayDice />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
