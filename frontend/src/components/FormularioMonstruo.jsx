import { useState, useEffect } from 'react';
import axios from 'axios';
import Alerta from "../components/Alerta"

const FormularioMonstruo = () => {

    /*const enviarDatos = async (event) => {
        event.preventDefault()

        //console.log(JSON.stringify({datos}));

        //Descomentar y borrar console.log, poner las restricciones de no null en la base de datos para la tabla platos
        
        if ([nombre_plato, precio, descripcion].includes('')){

            setAlerta({msg: 'Hay campos vacios', error:true})
            return;
        }

        if (descripcion.length < 6){
            setAlerta({msg: 'La descripcios es muy corta', error:true})
            return;
        }

        if (id){
            try {
                const url = `https://apiimplementacion.rj.r.appspot.com/platos/${id}`
                const { data } = await axios.put(url, {nombre_plato, precio, descripcion})
            } catch (error) {
                console.log(error)
            }
        }else{
            try {
                const url = "https://apiimplementacion.rj.r.appspot.com/platos"
                const respuesta = await axios.post(url, {nombre_plato, precio, descripcion})
                setAlerta({
                    msg: 'Plato Creado correctamente',
                    error: false
                })
            }catch (error) {  
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }

        setAlerta({
            msg: 'Guardado correctamente'
        });

        setNombre('')
        setPrecio('')
        setDescripcion('')

    }*/

    /*const { msg } = alerta*/

    return (
        <>

            <h2 className="font-black text-3xl text-center">Formulario Adición</h2>

            <p className='text-lg text-center mb-10'>
                Añade los Monstruos que atacan la ciudad y {''} <span className='text-indigo-600 font-bold'> Adminístralos</span>
            </p>

            <form
                className='bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md' 
            >
                <div className="mb-5">
                    <label htmlFor="nombre_monstruo" className="uppercase text-gray-700 font-bold">
                        Nombre Monstruo
                    </label>
                    <input id="nombre_monstruo" type="text" placeholder="Nombre Plato" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></input>
                </div>
                <div className="mb-5">
                    <label htmlFor="nivel_amenaza" className="uppercase text-gray-700 font-bold">
                        Nivel amenaza
                    </label>
                    <input id="nivel_amenaza" type="text" placeholder="Precio Plato" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <input 
                    type="submit" 
                    value= 'Enviar' 
                    className="bg-indigo-600 w-full p-3
                    text-white uppercase font-bold
                    hover:bg-indigo-800 cursor-pointer transition-colors"
                />
            </form>
            
        </>
    )
}

export default FormularioMonstruo