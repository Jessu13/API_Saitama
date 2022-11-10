import { Outlet } from "react-router-dom"
import HeaderPP from "../components/HeaderPP"
import FooterPP from "../components/FooterPP"

const AuthLayout = () => {
  return (
    <>

      <HeaderPP />

        <main className='container mx-auto mt-10'>
            <Outlet/>
        </main>
        
      <FooterPP/>
    </>
  )
}

export default AuthLayout