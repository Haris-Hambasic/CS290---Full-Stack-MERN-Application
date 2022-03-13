import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/EditExerciseDisplay.css";

const EditExerciseDisplay = () => {
    const { exercise_id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [unit, setUnit] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:3000/exercises/${exercise_id}`, {
            method: "PUT",
            body: JSON.stringify({
                name,
                reps,
                weight,
                unit,
                date
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(dataJSON => dataJSON.json())
            .then(updated_exercise => {
                console.log("UPDATED EXERCISE:", updated_exercise)
                navigate("/", { replace: true });
            })
            .catch(error => console.log(error));
    };
    
    useEffect(() => {
        fetch(`http://localhost:3000/exercises/${exercise_id}`, { method: "GET" })
            .then(dataJSON => dataJSON.json())
            .then(retrieved_exercise => {
                setName(retrieved_exercise.name)
                setReps(retrieved_exercise.reps)
                setWeight(retrieved_exercise.weight)
                setUnit(retrieved_exercise.unit)
                setDate(retrieved_exercise.date)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
        <section className="edit-exercise-container">
            <section className="edit-exercise-calling-container">
                <h1 className="edit-exercise-calling">Edit an exercise in your exercise tracker</h1>
                <p className="edit-exercise-statement">Fill out the form on the right to edit an exercise in your exercise tracker. If you want to speak with a personal trainer to get a better idea of how to fine-tune the exercise to your needs, contact us and we will set you up with a personal trainer.</p>
            </section>
            <form className="edit-exercise-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Exercise:</label> <br />
                <input type="text" id="name" name="name" placeholder="Enter the name of the exercise" onChange={e => setName(e.target.value)} value={name} /> <br/>
                <label htmlFor="reps">Reps:</label> <br />
                <input type="number" id="reps" name="reps" placeholder="Enter the number of reps to perform" onChange={e => setReps(e.target.value)} value={reps} /> <br/>
                <label htmlFor="weight">Weight:</label> <br />
                <input type="number" id="weight" name="weight" placeholder="Enter the weight to use" onChange={e => setWeight(e.target.value)} value={weight} /> <br/>
                <label htmlFor="unit">Unit:</label> <br />
                <input type="text" id="unit" name="unit" placeholder="Enter the weight unit" onChange={e => setUnit(e.target.value)} value={unit} /> <br/>
                <label htmlFor="date">Date:</label> <br />
                <input type="text" id="date" name="date" placeholder="Enter the date to perform the exercise (MM-DD-YY)" onChange={e => setDate(e.target.value)} value={date} /> <br/>
                <button type="submit">Update Exercise</button>
            </form>
        </section>
        </>
    );
};

export { EditExerciseDisplay };
