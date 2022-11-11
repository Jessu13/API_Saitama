import useFans from "../hooks/useFans"

const Fan = ({fan}) => {
    
    //const { setEdicion } = useMonstruos()
    const { eliminarFan } = useFans()
    const { id_fan, nombre_fan, heroes } = fan

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        
        <p className="font-bold uppercase text-indigo-600 my-2">Nombre del Fan: <span className="font-normal normal-case text-black">{nombre_fan}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Es Fan de los Heroes: <span className="font-normal normal-case text-black">{heroes}</span></p>

        <div className="flex justify-between my-5">

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                onClick={() => eliminarFan(id_fan)}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}

export default Fan