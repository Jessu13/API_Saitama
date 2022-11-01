import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AdminMonstruos = () => {
  return (
    <>
        <Header/>

        <main className='container mx-auto mt-10'>
            <Outlet/>
        </main>
        
        <Footer/>
    </>
  )
}

export default AdminMonstruos