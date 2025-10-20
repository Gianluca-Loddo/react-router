
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import About from './pages/About'




export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Route Padre con DefaultLayout (navbar + outlet) */}
        <Route path="/" Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="products" Component={Products} />
          <Route path="products/:id" Component={Products} /> {/* ROTTA DINAMICA - per il prodotto (dettagli) */}
          <Route path="about" Component={About} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

