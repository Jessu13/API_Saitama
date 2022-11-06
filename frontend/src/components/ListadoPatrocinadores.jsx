import usePatrocinadores from "../hooks/usePatrocinadores"
import Patrocinador from "./Patrocinador"

const ListadoPatrocinadores = () => {

  const { patrocinadores } = usePatrocinadores()
  return (
    <>
      
      {patrocinadores.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Patrocinadores</h2>
          <p className='text-lg text-center mb-10'>
                Administra los patrocinadores de la ciudad
          </p>

          {patrocinadores.map( patrocinador =>(
            <Patrocinador
              key= {patrocinadores.id_patrocinador}
              patrocinador = {patrocinador}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Patrocinadores</h2>
          
        </>
      )}
      
    </>
  )
}

export default ListadoPatrocinadores