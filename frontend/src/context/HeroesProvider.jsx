import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const HeroesContext = createContext()

export const HeroesProvider = ({children}) => {

    const [heroes, setHeroes] = useState([])
    //const [monstruo, setMonstruo] = useState({})

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

    return(
        <HeroesContext.Provider value={{
            heroes
        }}>
            {children}
        </HeroesContext.Provider>
    )
}


export default HeroesContext;