import useFans from "../hooks/useFans"
import Fan from "./Fan"

const ListadoFans = () => {

  const { fans } = useFans()
  return (
    <>
      
      {fans.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Fans</h2>
          <p className='text-lg text-center mb-10'>
                Administra los Fans de los héroes de la ciudad
          </p>

          {fans.map( fan =>(
            <Fan
              key= {fan.id_fan}
              fan = {fan}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Fans</h2>
          
        </>
      )}
      
    </>
  )
}

export default ListadoFans