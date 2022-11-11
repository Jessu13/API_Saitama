import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const FansContext = createContext()

export const FansProvider = ({children}) => {

    const [fans, setFans] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    const guardar_Fan = async (fan) =>{
        try {
            const url = "https://apiimplementacion.rj.r.appspot.com/fans"
            const { data } = await axios.post(url, fan)
            /*setAlerta({
                msg: 'El monstruo ha sido creado con éxito',
                error: false
            })*/
            setFans([data, ...fans])
        } catch (error) {
            console.log(error)
        }
    }


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

    const eliminarFan = async id => {
        const confirmar = confirm('¿Confirmas que deseas eliminar?')
        
        if(confirmar){
            try {
                const url = `https://apiimplementacion.rj.r.appspot.com/fans/${id}`
                const { data } = await axios.delete(url)
                
                //const monstruosActualizado = monstruos.filter(monstruosState => monstruosState.id !== id)

                //setMonstruos(monstruosActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <FansContext.Provider value={{
            fans,
            guardar_Fan,
            eliminarFan
        }}>
            {children}
        </FansContext.Provider>
    )
}


export default FansContext;