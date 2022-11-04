import useMonstruos from "../hooks/useMonstruos"
import Monstruo from "./Monstruo"

const ListadoMonstruos = () => {

  const { monstruos } = useMonstruos()
  var count = 1
  return (
    <>
      
      {monstruos.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Monstruos</h2>
          <p className='text-lg text-center mb-10'>
                Administra los monstruos que atacan la ciudad
          </p>

          {monstruos.map( monstruo =>(
            <Monstruo
              key= {monstruos.id_monstruo}
              monstruo = {monstruo}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Monstruos</h2>
          
        </>
      )}
      
    </>
  )
}

export default ListadoMonstruos