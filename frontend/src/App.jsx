import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import AdminMonstruos from './layout/AdminMonstruos'
import AdminHeroes from './layout/AdminHeroes'
import AdminPatrocinadores from './layout/AdminPatrocinadores'
import AdminFans from './layout/AdminFans'
import AdminBatallas from './layout/AdminBatallas'
import AdminSZ from './layout/AdminSaitamaZone'


import PaginaPpal from './paginas/PaginaPpal'
import AdministrarMonstruos from './paginas/AdministrarMonstruos'
import AdministrarHeroes from './paginas/AdministrarHeroes'
import AdministrarPatrocinadores from './paginas/AdministrarPatrocinadores'
import AdministrarFans from './paginas/AdministrarFans'
import AdministrarBatallas from './paginas/AdministrarBatallas'
import PaginaSZ from './paginas/AdministrarSaitamaZone'

import { MonstruosProvider } from './context/MonstruosProvider'
import { HeroesProvider } from './context/HeroesProvider'
import { PatrocinadoresProvider } from './context/PatrocinadoresProvider'
import { FansProvider } from './context/FansProvider'
import { BatallasProvider } from './context/BatallasProvider'

function App() {

  return (
    <BrowserRouter>
      <MonstruosProvider>
        <HeroesProvider>
          <PatrocinadoresProvider>
            <FansProvider>
              <BatallasProvider>
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

                  <Route path='/admin-saitamaZone' element={<AdminSZ />}>
                      <Route index element={<PaginaSZ />}/>
                  </Route>

                  <Route path='/admin-fans' element={<AdminFans />}>
                    <Route index element={<AdministrarFans />}/>
                  </Route>

                  <Route path='/admin-batallas' element={<AdminBatallas />}>
                    <Route index element={<AdministrarBatallas />}/>
                  </Route>

                </Routes>
              </BatallasProvider>
            </FansProvider>
          </PatrocinadoresProvider>
        </HeroesProvider>
      </MonstruosProvider>
    </BrowserRouter>
  )
}

export default App
