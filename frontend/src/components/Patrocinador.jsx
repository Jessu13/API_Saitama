import usePatrocinadores from "../hooks/usePatrocinadores"

const Patrocinador = ({patrocinador}) => {
    
    //const { setEdicion } = useMonstruos()
    const { eliminarPatrocinador } = usePatrocinadores()
    const { id_patrocinador, nombre_patrocinador, heroes } = patrocinador

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        
        <p className="font-bold uppercase text-indigo-600 my-2">Nombre del Patrocinador: <span className="font-normal normal-case text-black">{nombre_patrocinador}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Heroes que patrocina: <span className="font-normal normal-case text-black">{heroes}</span></p>

        <div className="flex justify-between my-5">

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                onClick={() => eliminarPatrocinador(id_patrocinador)}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}

export default Patrocinador