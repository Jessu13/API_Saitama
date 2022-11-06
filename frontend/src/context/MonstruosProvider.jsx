import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const MonstruosContext = createContext()

export const MonstruosProvider = ({children}) => {

    const [monstruos, setMonstruos] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    const guardar_Monstruo = async (monstruo) =>{
        try {
            const url = "http://localhost:4000/monstruos"
            const { data } = await axios.post(url, monstruo)
            /*setAlerta({
                msg: 'El monstruo ha sido creado con éxito',
                error: false
            })*/
            setMonstruos([data, ...monstruos])
        } catch (error) {
            console.log(error)
        }
    }

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
                
                const monstruosActualizado = monstruos.filter(monstruosState => monstruosState.id !== id)

                setMonstruos(monstruosActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <MonstruosContext.Provider value={{
            monstruos,
            guardar_Monstruo,
            eliminarMonstruo
        }}>
            {children}
        </MonstruosContext.Provider>
    )
}


export default MonstruosContext;