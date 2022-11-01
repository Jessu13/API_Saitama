import useMonstruos from "../hooks/useMonstruos"

const Monstruo = ({monstruo}) => {
    
    //const { setEdicion } = useMonstruos()

    const { eliminarMonstruo } = useMonstruos()
    const { id_monstruo, nombre_monstruo, nivel_amenaza } = monstruo
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-indigo-600 my-2">Nombre: <span className="font-normal normal-case text-black">{nombre_monstruo}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Nivel Amenaza: <span className="font-normal normal-case text-black">{nivel_amenaza}</span></p>

        <div className="flex justify-between my-5">

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                onClick={() => eliminarMonstruo(id_monstruo)}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}

export default Monstruo