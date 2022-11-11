import useBatallas from "../hooks/useBatallas"
import Batalla from "./Batalla"

const ListadoBatallas = () => {

  const { batallas } = useBatallas()
  return (
    <>
      
      {batallas.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Batallas</h2>
          <p className='text-lg text-center mb-10'>
                Administra las Batallas para recordar esos épicos momentos
          </p>

          {batallas.map( batalla =>(
            <Batalla
              key= {batalla.id}
              batalla = {batalla}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Batallas</h2>
          
        </>
      )}
      
    </>
  )
}

export default ListadoBatallas