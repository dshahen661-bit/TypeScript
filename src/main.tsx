import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Leyout from './pages/Leyout.tsx'
import Shop from './pages/Shop.tsx'
import About from './pages/About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Leyout />}>
        <Route index element={<App />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
