import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const HeroesContext = createContext()

export const HeroesProvider = ({children}) => {

    const [heroes, setHeroes] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    const guardar_Heroe = async (heroe) =>{
        try {
            const url = "http://localhost:4000/heroes"
            const { data } = await axios.post(url, heroe)
            /*setAlerta({
                msg: 'El monstruo ha sido creado con éxito',
                error: false
            })*/
            setHeroes([data, ...heroes])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const obtenerHeroes = async () => {

            try {
                const url = "http://localhost:4000/heroes"
                const { data } = await axios(url)
                setHeroes(data)

            } catch (error) {
                console.log(error)
            }
            }
        obtenerHeroes()
    }, [])

    const eliminarHeroe = async id => {
        const confirmar = confirm('¿Confirmas que deseas eliminar?')
        
        if(confirmar){
            try {
                const url = `http://localhost:4000/heroes/${id}`
                const { data } = await axios.delete(url)
                
                //const monstruosActualizado = monstruos.filter(monstruosState => monstruosState.id !== id)

                //setMonstruos(monstruosActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <HeroesContext.Provider value={{
            heroes,
            guardar_Heroe,
            eliminarHeroe
        }}>
            {children}
        </HeroesContext.Provider>
    )
}


export default HeroesContext;