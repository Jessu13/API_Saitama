import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const BatallasContext = createContext()

export const BatallasProvider = ({children}) => {

    const [batallas, setBatallas] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    const guardar_Batalla = async (batalla) =>{
        try {
            const url = "https://apiimplementacion.rj.r.appspot.com/batallas"
            const { data } = await axios.post(url, batalla)
            /*setAlerta({
                msg: 'El monstruo ha sido creado con éxito',
                error: false
            })*/
            setBatallas([data, ...batallas])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const obtenerBatallas = async () => {

            try {
                const url = "https://apiimplementacion.rj.r.appspot.com/batallas"
                const { data } = await axios(url)
                setBatallas(data)

            } catch (error) {
                console.log(error)
            }
            }
        obtenerBatallas()
    }, [])

    const eliminarBatalla = async id => {
        const confirmar = confirm('¿Confirmas que deseas eliminar?')
        
        if(confirmar){
            try {
                const url = `https://apiimplementacion.rj.r.appspot.com/batallas/${id}`
                const { data } = await axios.delete(url)
                
                //const monstruosActualizado = monstruos.filter(monstruosState => monstruosState.id !== id)

                //setMonstruos(monstruosActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <BatallasContext.Provider value={{
            batallas,
            guardar_Batalla,
            eliminarBatalla
        }}>
            {children}
        </BatallasContext.Provider>
    )
}


export default BatallasContext;