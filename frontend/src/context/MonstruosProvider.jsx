import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const MonstruosContext = createContext()

export const MonstruosProvider = ({children}) => {

    const [monstruos, setMonstruos] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    useEffect(() => {
        const obtenerMonstruos = async () => {

            try {
                const url = "http://localhost:4000/monstruos"
                const { data } = await axios(url)
                setMonstruos(data)

            } catch (error) {
                console.log(error)
            }
            }
        obtenerMonstruos()
    }, [])

    const eliminarMonstruo = async id => {
        const confirmar = confirm('¿Confirmas que deseas eliminar?')
        
        if(confirmar){
            try {
                const url = `http://localhost:4000/monstruos/${id}`
                const { data } = await axios.delete(url)
                
                const platosActualizado = platos.filter(platosState => platosState.id !== id)

                setMonstruos(platosActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <MonstruosContext.Provider value={{
            monstruos,
            eliminarMonstruo
        }}>
            {children}
        </MonstruosContext.Provider>
    )
}


export default MonstruosContext;