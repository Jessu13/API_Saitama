import { Link } from "react-router-dom";

const HeaderP = () => {
    return (
      <>
          <header className="py-10 bg-slate-400">
              <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                  <h1 className="font-bold text-2xl text-indigo-200">Administrador de Patrocinadores</h1>
              

                <nav className="flex gap-4">

                        <Link to="/admin-monstruos" className="text-white text-sm uppercase font-bold">Monstruos</Link>
                        <Link to="/admin-heroes" className="text-white text-sm uppercase font-bold">Heroes</Link>
                        <Link to="/admin-batallas" className="text-white text-sm uppercase font-bold">Batallas</Link>
                        <Link to="/admin-fans" className="text-white text-sm uppercase font-bold">Fans</Link>
                        <Link to="/admin-saitamaZone" className="text-yellow text-sm uppercase font-bold">Saitama Zone</Link>
                        <Link to="/" className="text-white text-sm uppercase font-bold">Home</Link>

                </nav>

              </div>
  
          </header>
      </>
    )
  }
  
  export default HeaderP