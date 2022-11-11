import useBatallas from "../hooks/useBatallas"

const Batalla = ({batalla}) => {
    
    //const { setEdicion } = useMonstruos()
    const { eliminarBatalla } = useBatallas()
    const { id, ganador, nombre_heroe, nombre_monstruo } = batalla

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        
        <p className="font-bold uppercase text-indigo-600 my-2">Ganador del encuentro: <span className="font-normal normal-case text-black">{ganador}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Heroe Defendiendo: <span className="font-normal normal-case text-black">{nombre_heroe}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Monstruo Atacando: <span className="font-normal normal-case text-black">{nombre_monstruo}</span></p>

        <div className="flex justify-between my-5">

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                onClick={() => eliminarBatalla(id)}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}

export default Batalla