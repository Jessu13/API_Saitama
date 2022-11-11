import { Outlet } from 'react-router-dom'
import HeaderB from '../components/HeaderB'
import FooterB from '../components/FooterB'

const AdminBatallas = () => {
  return (
    <>
        <HeaderB />

        <main className='container mx-auto mt-10'>
            <Outlet/>
        </main>
        
        <FooterB />
        
    </>
  )
}

export default AdminBatallas