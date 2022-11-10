import { Outlet } from 'react-router-dom'
import HeaderSZ from '../components/HeaderSZ'
import FooterSZ from '../components/FooterSZ'

const AdminSZ = () => {
    return (
    <>
        <HeaderSZ/>

        <main className='container mx-auto mt-10'>
            <Outlet/>
        </main>
        
        <FooterSZ/>
    </>
    )
}

export default AdminSZ