import { useState } from 'react';
import Alerta from "./Alerta"
import usePatrocinadores from '../hooks/usePatrocinadores';

const FormularioPatrocinador = () => {

    const [nombre_patrocinador, setNombre] = useState('')
    const [tipo_patrocinio, setPatrocinio] = useState('')
    const [nombre_heroe, setHeroe] = useState('')

    const [alerta, setAlerta] = useState({})

    const { guardar_Patrocinador } = usePatrocinadores()

    const enviarDatos = async (event) => {
        event.preventDefault()

        //Validar formulario

        if([nombre_patrocinador, tipo_patrocinio, nombre_heroe].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        setAlerta({})
        guardar_Patrocinador({ nombre_patrocinador, tipo_patrocinio, nombre_heroe})
    }

    const { msg } = alerta

    return (
        <>

            <h2 className="font-black text-3xl text-center">Formulario Adición</h2>

            <p className='text-lg text-center mb-10'>
                Añade los Patrocinadores de {''} <span className='text-indigo-600 font-bold'> Ciudad-A</span>
            </p>

            <form
                className='bg-white py-4 px-5 mb-10 lg:mb-5 shadow-md rounded-md'
                onSubmit={enviarDatos} 
            >
                <div className="mb-5">
                    <label htmlFor="nombre_patrocinador" className="uppercase text-gray-700 font-bold">
                        Nombre Patrocinador
                    </label>
                    <input id="nombre_patrocinador" type="text" placeholder="Nombre Patrocinador" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre_patrocinador} onChange={e => setNombre(e.target.value)}></input>
                </div>

                <div className="mb-5">
                    <label htmlFor="tipo_patrocinio" className="uppercase text-gray-700 font-bold">
                        Tipo de Patrocinio
                    </label>
                    <select id="tipo_patrocinio" name="tipo_patrocinio" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-indigo-600" value={tipo_patrocinio} onChange={e => setPatrocinio(e.target.value)}>
                        <option value="" >Escoja un Tipo de Patrocinio</option>
                        <option value="Monstruo">Monstruo</option>
                        <option value="Heroe">Heroe</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="nombre_heroe" className="uppercase text-gray-700 font-bold">
                        Heroe a Patrocinar
                    </label>
                    <input id="nombre_heroe" type="text" placeholder="Nombre Heroe" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre_heroe} onChange={e => setHeroe(e.target.value)}></input>
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

export default FormularioPatrocinador