import { useState } from 'react';
import Alerta from "../components/Alerta"
import useBatallas from '../hooks/useBatallas';

const FormularioBatalla = () => {

    const [nombre_heroe, setNombre] = useState('')
    const [nombre_monstruo, setMonstruo] = useState('')
    const [ganador, setGanador] = useState('')

    const [alerta, setAlerta] = useState({})

    const { guardar_Batalla } = useBatallas()

    const enviarDatos = async (event) => {
        event.preventDefault()

        //Validar formulario

        if([nombre_heroe, nombre_monstruo, ganador].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        setAlerta({})
        guardar_Batalla({ nombre_heroe, nombre_monstruo, ganador})
    }

    const { msg } = alerta

    return (
        <>

            <h2 className="font-black text-3xl text-center">Formulario Adición</h2>

            <p className='text-lg text-center mb-10'>
                Añade las Batallas que tienen lugar en {''} <span className='text-indigo-600 font-bold'> Ciudad-A</span>
            </p>

            <form
                className='bg-white py-4 px-5 mb-10 lg:mb-5 shadow-md rounded-md'
                onSubmit={enviarDatos} 
            >
                <div className="mb-5">
                    <label htmlFor="nombre_heroe" className="uppercase text-gray-700 font-bold">
                        Nombre Heroe
                    </label>
                    <input id="nombre_heroe" type="text" placeholder="Nombre Heroe" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre_heroe} onChange={e => setNombre(e.target.value)}></input>
                </div>

                <div className="mb-5">
                    <label htmlFor="nombre_monstruo" className="uppercase text-gray-700 font-bold">
                        Nombre Monstruo
                    </label>
                    <input id="nombre_monstruo" type="text" placeholder="Monstruo Atacante" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre_monstruo} onChange={e => setMonstruo(e.target.value)}></input>
                </div>

                <div className="mb-5">
                    <label htmlFor="ganador" className="uppercase text-gray-700 font-bold">
                        Ganador del encuentro
                    </label>
                    <input id="ganador" type="text" placeholder="¿Quién Venció?" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={ganador} onChange={e => setGanador(e.target.value)}></input>
                </div>

                <input 
                    type="submit" 
                    value= 'Agregar Batalla' 
                    className="bg-indigo-600 w-full p-3
                    text-white uppercase font-bold
                    hover:bg-indigo-800 cursor-pointer transition-colors"
                />
            </form>

            { msg && <Alerta alerta={alerta} />}
            
        </>
    )
}

export default FormularioBatalla