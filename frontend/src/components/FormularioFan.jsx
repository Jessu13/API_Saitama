import { useState } from 'react';
import Alerta from "./Alerta"
import useFans from '../hooks/useFans';

const FormularioFan = () => {

    const [nombre_fan, setNombre] = useState('')
    const [nombre_heroe, setHeroe] = useState('')

    const [alerta, setAlerta] = useState({})

    const { guardar_Fan } = useFans()

    const enviarDatos = async (event) => {
        event.preventDefault()

        //Validar formulario

        if([nombre_fan, nombre_heroe].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        setAlerta({})
        guardar_Fan({ nombre_fan, nombre_heroe})
    }

    const { msg } = alerta

    return (
        <>

            <h2 className="font-black text-3xl text-center">Formulario Adición</h2>

            <p className='text-lg text-center mb-10'>
                Añade los Fans que apoyan a los heroes y monstruos de {''} <span className='text-indigo-600 font-bold'> Ciudad-A</span>
            </p>

            <form
                className='bg-white py-4 px-5 mb-10 lg:mb-5 shadow-md rounded-md'
                onSubmit={enviarDatos} 
            >
                <div className="mb-5">
                    <label htmlFor="nombre_fan" className="uppercase text-gray-700 font-bold">
                        Nombre Fan
                    </label>
                    <input id="nombre_fan" type="text" placeholder="Nombre Fan" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre_fan} onChange={e => setNombre(e.target.value)}></input>
                </div>

                <div className="mb-5">
                    <label htmlFor="nombre_heroe" className="uppercase text-gray-700 font-bold">
                        ¿De quién eres Fan?
                    </label>
                    <input id="nombre_heroe" type="text" placeholder="Nombre Heroe" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre_heroe} onChange={e => setHeroe(e.target.value)}></input>
                </div>

                <input 
                    type="submit" 
                    value= 'Agregar Fan' 
                    className="bg-indigo-600 w-full p-3
                    text-white uppercase font-bold
                    hover:bg-indigo-800 cursor-pointer transition-colors"
                />
            </form>

            { msg && <Alerta alerta={alerta} />}
            
        </>
    )
}

export default FormularioFan