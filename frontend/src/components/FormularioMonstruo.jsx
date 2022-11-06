import { useState } from 'react';
import Alerta from "../components/Alerta"
import useMonstruos from '../hooks/useMonstruos';

const FormularioMonstruo = () => {

    const [nombre_monstruo, setNombre] = useState('')
    const [nivel_amenaza, setNivel] = useState('')
    const [habilidad, setHabilidad] = useState('')
    const [mutacion, setMutacion] = useState('')

    const [alerta, setAlerta] = useState({})

    const { guardar_Monstruo } = useMonstruos()

    const enviarDatos = async (event) => {
        event.preventDefault()

        //Validar formulario

        if([nombre_monstruo, nivel_amenaza, habilidad, mutacion].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        guardar_Monstruo({ nombre_monstruo, nivel_amenaza, habilidad, mutacion })
        setAlerta({})
    }

    const { msg } = alerta

    return (
        <>

            <h2 className="font-black text-3xl text-center">Formulario Adición</h2>

            <p className='text-lg text-center mb-10'>
                Añade los Monstruos que atacan la ciudad y {''} <span className='text-indigo-600 font-bold'> Adminístralos</span>
            </p>

            <form
                className='bg-white py-4 px-5 mb-10 lg:mb-5 shadow-md rounded-md'
                onSubmit={enviarDatos} 
            >
                <div className="mb-5">
                    <label htmlFor="nombre_monstruo" className="uppercase text-gray-700 font-bold">
                        Nombre Monstruo
                    </label>
                    <input id="nombre_monstruo" type="text" placeholder="Nombre Monstruo" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre_monstruo} onChange={e => setNombre(e.target.value)}></input>
                </div>
                <div className="mb-5">
                    <label htmlFor="nivel_amenaza" className="uppercase text-gray-700 font-bold">
                        Nivel amenaza
                    </label>
                    <select id="nivel_amenaza" name="nivel_amenaza" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-indigo-600" value={nivel_amenaza} onChange={e => setNivel(e.target.value)}>
                        <option value="" >Escoja un Nivel de Amenaza</option>
                        <option value="Lobo">Lobo</option>
                        <option value="Tigre">Tigre</option>
                        <option value="Ogro">Ogro</option>
                        <option value="Dragón">Dragón</option>
                        <option value="Dios">Dios</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="habilidad" className="uppercase text-gray-700 font-bold">
                        Habilidad
                    </label>
                    <input id="habilidad" type="text" placeholder="Habilidad" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={habilidad} onChange={e => setHabilidad(e.target.value)}></input>
                </div>

                <div className="mb-5">
                    <label htmlFor="mutacion" className="uppercase text-gray-700 font-bold">
                        Mutación
                    </label>
                    <input id="mutacion" type="text" placeholder="Mutación" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={mutacion} onChange={e => setMutacion(e.target.value)}></input>
                </div>

                <input 
                    type="submit" 
                    value= 'Agregar Monstruo' 
                    className="bg-indigo-600 w-full p-3
                    text-white uppercase font-bold
                    hover:bg-indigo-800 cursor-pointer transition-colors"
                />
            </form>

            { msg && <Alerta alerta={alerta} />}
            
        </>
    )
}

export default FormularioMonstruo