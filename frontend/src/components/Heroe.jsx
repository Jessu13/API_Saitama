import useHeroes from "../hooks/useHeroes"

const Heroe = ({heroe}) => {
    
    //const { setEdicion } = useHeroes()
    const { eliminarHeroe } = useHeroes()
    const { id, nombre_heroe, rango, habilidad, lugar_Residencia, telefono, pos } = heroe

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        
        <p className="font-bold uppercase text-indigo-600 my-2">Posición en el Ranking: <span className="font-normal normal-case text-black">{pos}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Nombre: <span className="font-normal normal-case text-black">{nombre_heroe}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Rango: <span className="font-normal normal-case text-black">{rango}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Habilidad: <span className="font-normal normal-case text-black">{habilidad}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Lugar de Residencia: <span className="font-normal normal-case text-black">{lugar_Residencia}</span></p>

        <p className="font-bold uppercase text-indigo-600 my-2">Telefono: <span className="font-normal normal-case text-black">{telefono}</span></p>

        <div className="flex justify-between my-5">

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                onClick={() => eliminarHeroe(id)}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}

export default Heroe