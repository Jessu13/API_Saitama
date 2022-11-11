import { useState } from "react"
import ListadoPatrocinadores from "../components/ListadoPatrocinadores"
import FormularioPatrocinador from "../components/FormularioPatrocinador"

const AdministrarPatrocinadores = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <>
        <div className="flex flex-col md:flex-row">
          <button type="button" className="bg-slate-400 text-white font-bold uppercase mx-10 p-3 rounded-md md:hidden" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
            {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
          </button>
          <div className={`${mostrarFormulario ? 'block' : 'hidden' } md:block md:2-1/2 lg:w-2/5`}>
            <FormularioPatrocinador />
          </div>

          <div className="md:2-1/2 lg:w-3/5">
            <ListadoPatrocinadores />
          </div>
        </div>
    </>
  )
}

export default AdministrarPatrocinadores