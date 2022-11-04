import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import AdminMonstruos from './layout/AdminMonstruos'
import AdminHeroes from './layout/AdminHeroes'


import PaginaPpal from './paginas/PaginaPpal'
import AdministrarMonstruos from './paginas/AdministrarMonstruos'
import AdministrarHeroes from './paginas/AdministrarHeroes'

import { MonstruosProvider } from './context/MonstruosProvider'

import { HeroesProvider } from './context/HeroesProvider'

function App() {

  return (
    <BrowserRouter>
      <MonstruosProvider>
        <HeroesProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<PaginaPpal/>}/>
            </Route>

            <Route path='/admin-monstruos' element={<AdminMonstruos />}>
                <Route index element={<AdministrarMonstruos />}/>
            </Route>

            <Route path='/admin-heroes' element={<AdminHeroes />}>
                <Route index element={<AdministrarHeroes />}/>
            </Route>
          </Routes>
        </HeroesProvider>
      </MonstruosProvider>
    </BrowserRouter>
  )
}

export default App
