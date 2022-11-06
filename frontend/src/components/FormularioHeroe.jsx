import { useState } from 'react';
import Alerta from "../components/Alerta"
import useHeroes from '../hooks/useHeroes';

const FormularioHeroe = () => {

    const [nombre_heroe, setNombre] = useState('')
    const [rango, setRango] = useState('')
    const [habilidad, setHabilidad] = useState('')
    const [lugar_Residencia, setResidencia] = useState('')
    const [telefono, setTelefono] = useState('')

    const [alerta, setAlerta] = useState({})

    const { guardar_Heroe } = useHeroes()

    const enviarDatos = async (event) => {
        event.preventDefault()

        //Validar formulario

        if([nombre_heroe, rango, habilidad, lugar_Residencia, telefono].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        setAlerta({})
        guardar_Heroe({ nombre_heroe, rango, habilidad, lugar_Residencia, telefono})
    }

    const { msg } = alerta

    return (
        <>

            <h2 className="font-black text-3xl text-center">Formulario Adición</h2>

            <p className='text-lg text-center mb-10'>
                Añade los Heroes que defienden la ciudad y {''} <span className='text-indigo-600 font-bold'> Adminístralos</span>
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
                    <label htmlFor="rango" className="uppercase text-gray-700 font-bold">
                        Rango
                    </label>
                    <select id="rango" name="rango" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-indigo-600" value={rango} onChange={e => setRango(e.target.value)}>
                        <option value="" >Escoja un Rango</option>
                        <option value="A">A</option>
                        <option value="S">S</option>
                        <option value="C">C</option>
                        <option value="B">B</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="habilidad" className="uppercase text-gray-700 font-bold">
                        Habilidad
                    </label>
                    <input id="habilidad" type="text" placeholder="Habilidad" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={habilidad} onChange={e => setHabilidad(e.target.value)}></input>
                </div>

                <div className="mb-5">
                    <label htmlFor="lugar_Residencia" className="uppercase text-gray-700 font-bold">
                        Lugar de Residencia
                    </label>
                    <input id="lugar_Residencia" type="text" placeholder="Lugar de Residencia" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={lugar_Residencia} onChange={e => setResidencia(e.target.value)}></input>
                </div>

                <div className="mb-5">
                    <label htmlFor="telefono" className="uppercase text-gray-700 font-bold">
                        Telefono
                    </label>
                    <input id="telefono" type="number" placeholder="Teléfono" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={telefono} onChange={e => setTelefono(e.target.value)}></input>
                </div>

                <input 
                    type="submit" 
                    value= 'Agregar Heroe' 
                    className="bg-indigo-600 w-full p-3
                    text-white uppercase font-bold
                    hover:bg-indigo-800 cursor-pointer transition-colors"
                />
            </form>

            { msg && <Alerta alerta={alerta} />}
            
        </>
    )
}

export default FormularioHeroe