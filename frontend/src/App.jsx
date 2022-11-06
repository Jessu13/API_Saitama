import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import AdminMonstruos from './layout/AdminMonstruos'
import AdminHeroes from './layout/AdminHeroes'
import AdminPatrocinadores from './layout/AdminPatrocinadores'


import PaginaPpal from './paginas/PaginaPpal'
import AdministrarMonstruos from './paginas/AdministrarMonstruos'
import AdministrarHeroes from './paginas/AdministrarHeroes'
import AdministrarPatrocinadores from './paginas/AdministrarPatrocinadores'

import { MonstruosProvider } from './context/MonstruosProvider'
import { HeroesProvider } from './context/HeroesProvider'
import { PatrocinadoresProvider } from './context/PatrocinadoresProvider'

function App() {

  return (
    <BrowserRouter>
      <MonstruosProvider>
        <HeroesProvider>
          <PatrocinadoresProvider>
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

              <Route path='/admin-patrocinadores' element={<AdminPatrocinadores />}>
                  <Route index element={<AdministrarPatrocinadores />}/>
              </Route>
            </Routes>
          </PatrocinadoresProvider>
        </HeroesProvider>
      </MonstruosProvider>
    </BrowserRouter>
  )
}

export default App
