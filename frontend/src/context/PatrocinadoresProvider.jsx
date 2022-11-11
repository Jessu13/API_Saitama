import { createContext, useState, useEffect} from 'react'
import axios from 'axios'

const PatrocinadoresContext = createContext()

export const PatrocinadoresProvider = ({children}) => {

    const [patrocinadores, setPatrocinadores] = useState([])
    //const [monstruo, setMonstruo] = useState({})

    const guardar_Patrocinador = async (patrocinador) =>{
        try {
            const url = "https://apiimplementacion.rj.r.appspot.com/patrocinadores"
            const { data } = await axios.post(url, patrocinador)
            /*setAlerta({
                msg: 'El monstruo ha sido creado con éxito',
                error: false
            })*/
            setPatrocinadores([data, ...patrocinadores])
        } catch (error) {
            console.log(error)
        }
    }

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

    const eliminarPatrocinador = async id => {
        const confirmar = confirm('¿Confirmas que deseas eliminar?')
        
        if(confirmar){
            try {
                const url = `https://apiimplementacion.rj.r.appspot.com/patrocinadores/${id}`
                const { data } = await axios.delete(url)
                
                //const monstruosActualizado = monstruos.filter(monstruosState => monstruosState.id !== id)

                //setMonstruos(monstruosActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <PatrocinadoresContext.Provider value={{
            patrocinadores,
            guardar_Patrocinador,
            eliminarPatrocinador
        }}>
            {children}
        </PatrocinadoresContext.Provider>
    )
}


export default PatrocinadoresContext;