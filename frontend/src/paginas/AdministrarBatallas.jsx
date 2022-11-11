import { useState } from "react"
import ListadoBatallas from "../components/ListadoBatallas"
import FormularioBatalla from "../components/FormularioBatalla"

const AdministrarBatallas = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <>
        <div className="flex flex-col md:flex-row">
          <button type="button" className="bg-slate-400 text-white font-bold uppercase mx-10 p-3 rounded-md md:hidden" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
            {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
          </button>
          <div className={`${mostrarFormulario ? 'block' : 'hidden' } md:block md:2-1/2 lg:w-2/5`}>
            <FormularioBatalla />
          </div>

          <div className="md:2-1/2 lg:w-3/5">
            <ListadoBatallas />
          </div>
        </div>
    </>
  )
}

export default AdministrarBatallas