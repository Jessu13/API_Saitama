import { Outlet } from 'react-router-dom'
import HeaderP from '../components/HeaderP'
import FooterP from '../components/FooterP'

const AdminPatrocinadores = () => {
  return (
    <>
        <HeaderP/>

        <main className='container mx-auto mt-10'>
            <Outlet/>
        </main>
        
        <FooterP/>
    </>
  )
}

export default AdminPatrocinadores