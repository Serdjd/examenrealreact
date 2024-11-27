import { useState } from "react"

export default function AnimalList() {
    const [animales,setAnimales] = useState([])

    //Recoge los datos del formulario y los valida
    function add(e) {
        if(e.get("nombre") == '' || e.get("especie")== '') {
            alert("Faltan campos por rellenar")
        }
        else {
            setAnimales([
                ...animales,
                {
                    id: animales.length,
                    nombre: e.get("nombre"),
                    especie: e.get("especie"),
                    edad: e.get("edad"),
                    sexo: e.get("sexo")
                }
            ])
        }
    }

    return(
        <>
            <form action={add}>
                <label>Nombre: <input type="text" name="nombre"></input></label>
                <br/>
                <label>Especie de animal: <input type="text" name="especie"></input></label>
                <br/>
                <label>Edad: <input type="number" name="edad"></input></label>
                <br/>
                <label>Sexo: 
                    <select name="sexo">
                        <option value={"Macho"}>Macho</option>
                        <option value={"Hembra"}>Hembra</option>
                    </select>
                </label>
                <br/>
                <button type="submit">Agregar animal</button>
            </form>
            {
                animales.map(animal => <Animal animal={animal} key={animal.id}/>)
            }
            
        </>
        
    )
}

function Animal({animal}) {
    return(
        <>
            <li>Nombre: {animal.nombre}</li>
            <pre>{"\t"}Edad: {animal.edad}</pre>
            <pre>{"\t"}Especie: {animal.especie}</pre>
            <pre>{"\t"}Sexo: {animal.sexo}</pre>
        </>
    )
}