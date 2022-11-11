import { Outlet } from 'react-router-dom'
import HeaderF from '../components/HeaderF'
import FooterF from '../components/FooterF'

const AdminFans = () => {
  return (
    <>
        <HeaderF />

        <main className='container mx-auto mt-10'>
            <Outlet/>
        </main>
        
        <FooterF />
        
    </>
  )
}

export default AdminFans