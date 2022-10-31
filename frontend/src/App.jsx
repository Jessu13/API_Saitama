import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import PaginaPpal from './paginas/PaginaPpal'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<PaginaPpal/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
