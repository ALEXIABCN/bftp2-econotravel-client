import './App.css';
import {useEffect, useState} from "react";
import Inicio from './components/Inicio.js'
import QuienesSomos from "./components/QuienesSomos";
import Experiencias from "./components/Experiencias";
<<<<<<< HEAD
import Navbar from "./Navbar";
=======
import Card from "./components/Card";
>>>>>>> bd49eb5ae22db28067852a2306465bfc9bc3c281

function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experienceName, experiencePrice, experienceDuration, experienceTag) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: experienceName, price: experiencePrice, duration: experienceDuration, tag: experienceTag})
            }
        ).then(_ => setRequiresUpdate(true))

    }


    return (
        <div className="App">
            <Navbar/>
            <Inicio />
            <QuienesSomos />
            <Experiencias />

            <div className="Experiencias">


                    {experiences.map(experience => <Card experience={experience} />)}

                <div className="newExperienceForm">
                    <input onChange={e => setNewExperience(e.target.value)} type="text"/>
                    <button onClick={() => addExperience(newExperience)}>Add experience</button>
                </div>




                <button>Saber más</button>
            </div>

            <div class="Formulario">
            <p>Aquí crearemos un formulario para el cliente</p>
            </div>





        </div>


    );
}

export default App;