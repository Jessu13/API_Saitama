import { Link } from "react-router-dom";

const HeaderP = () => {
    return (
      <>
          <header className="py-10 bg-slate-400">
              <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                  <h1 className="font-bold text-2xl text-indigo-200">Administrador de Patrocinadores</h1>
              

                <nav className="flex gap-4">

                    <Link to="/admin-heroes" className="text-white text-sm uppercase font-bold">Heroes</Link>
                    <Link to="/admin-monstruos" className="text-white text-sm uppercase font-bold">Monstruos</Link>

                </nav>

              </div>
  
          </header>
      </>
    )
  }
  
  export default HeaderP