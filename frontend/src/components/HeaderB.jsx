import { Link } from "react-router-dom";
import logo from "../assets/LogoAH.png"

const HeaderB = () => {
    return (
      <>
          <header className="py-10 bg-slate-400">
              <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                  <h1 className="font-bold text-2xl text-indigo-200 flex lg:flex-row"><img style={{width: "10%", height:"10%"}} src={logo} alt="Asociacion de Heroes" />Administrador de Batallas</h1>
              

                <nav className="flex gap-4">

                        <Link to="/admin-monstruos" className="text-white text-sm uppercase font-bold">Monstruos</Link>
                        <Link to="/admin-heroes" className="text-white text-sm uppercase font-bold">Heroes</Link>
                        <Link to="/admin-patrocinadores" className="text-white text-sm uppercase font-bold">Patrocinadores</Link>
                        <Link to="/admin-fans" className="text-white text-sm uppercase font-bold">Fans</Link>
                        <Link to="/admin-saitamaZone" className="text-yellow text-sm uppercase font-bold">Saitama Zone</Link>
                        <Link to="/" className="text-white text-sm uppercase font-bold">Home</Link>

                </nav>

              </div>
  
          </header>
      </>
    )
  }
  
  export default HeaderB