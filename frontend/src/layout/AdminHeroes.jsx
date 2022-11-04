import { Outlet } from 'react-router-dom'
import HeaderH from '../components/HeaderH'
import FooterH from '../components/FooterH'

const AdminHeroes = () => {
  return (
    <>
        <HeaderH/>

        <main className='container mx-auto mt-10'>
            <Outlet/>
        </main>
        
        <FooterH/>
    </>
  )
}

export default AdminHeroes