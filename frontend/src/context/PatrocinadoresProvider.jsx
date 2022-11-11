import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const PatrocinadoresContext = createContext()

export const PatrocinadoresProvider = ({children}) => {

    const [patrocinadores, setPatrocinadores] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    useEffect(() => {
        const obtenerPatrocinadores = async () => {

            try {
                const url = "https://apiimplementacion.rj.r.appspot.com/patrocinadores"
                const { data } = await axios(url)
                setPatrocinadores(data)

            } catch (error) {
                console.log(error)
            }
            }
        obtenerPatrocinadores()
    }, [])

    return(
        <PatrocinadoresContext.Provider value={{
            patrocinadores
        }}>
            {children}
        </PatrocinadoresContext.Provider>
    )
}


export default PatrocinadoresContext;