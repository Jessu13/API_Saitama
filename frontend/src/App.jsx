import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import AdminMonstruos from './layout/AdminMonstruos'


import PaginaPpal from './paginas/PaginaPpal'
import AdministrarMonstruos from './paginas/AdministrarMonstruos'
import { MonstruosProvider } from './context/MonstruosProvider'

function App() {

  return (
    <BrowserRouter>
      <MonstruosProvider>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<PaginaPpal/>}/>
          </Route>

          <Route path='/admin-monstruos' element={<AdminMonstruos />}>
              <Route index element={<AdministrarMonstruos />}/>
            </Route>
        </Routes>
      </MonstruosProvider>
    </BrowserRouter>
  )
}

export default App
