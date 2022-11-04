import useHeroes from "../hooks/useHeroes"
import Heroe from "./Heroe"

const ListadoHeroes = () => {

  const { heroes } = useHeroes()
  return (
    <>
      
      {heroes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Heroes</h2>
          <p className='text-lg text-center mb-10'>
                Administra los heroes que defienden la ciudad
          </p>

          {heroes.map( heroe =>(
            <Heroe
              key= {heroes.id}
              heroe = {heroe}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Heroes</h2>
          
        </>
      )}
      
    </>
  )
}

export default ListadoHeroes