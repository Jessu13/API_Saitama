import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const FansContext = createContext()

export const FansProvider = ({children}) => {

    const [fans, setFans] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    useEffect(() => {
        const obtenerFans = async () => {

            try {
                const url = "https://apiimplementacion.rj.r.appspot.com/fans"
                const { data } = await axios(url)
                setFans(data)

            } catch (error) {
                console.log(error)
            }
            }
        obtenerFans()
    }, [])

    return(
        <FansContext.Provider value={{
            fans
        }}>
            {children}
        </FansContext.Provider>
    )
}


export default FansContext;