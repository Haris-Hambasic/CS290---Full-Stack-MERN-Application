import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import "./styles/CreateExercise.css";

const CreateExercise = () => {
    const navigation = useNavigate();

    const [name, setName] = useState("");
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [unit, setUnit] = useState("");
    const [date, setDate] = useState("");
    const [selectValue, setSelectValue] = useState("lbs");
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("unit:", unit);
        await fetch("http://localhost:3000/exercises", {
            method: "POST",
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
        .then(createdExercise => {
            alert(`Exercise was successfully created!`);
            return navigation("/", { replace: true });
        })
        .catch(error => console.log(error));
    };

    const handleSelectChange = (e) => {
        setSelectValue(e.target.value);
        setUnit(e.target.value);
    };

    return (
        <>
        <section className="create-exercise-container">
            <section className="create-exercise-calling-container">
                <h1 className="create-exercise-calling">Create an exercise to add it to your exercise tracker.</h1>
                <p className="create-exercise-statement">Fill out the form on the right to create an exercise and add it to your exercise tracker. Once you're satisfied with all the exercises in your exercise tracker you can contact us directly and we will set you up with a personal trainer to go over your exercises and any questions you may have.</p>
            </section>
            <form className="create-exercise-form" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">Exercise:</label> <br />
                <input type="text" id="name" name="name" placeholder="Enter the name of the exercise" onChange={e => setName(e.target.value)} /> <br/>
                <label htmlFor="reps">Reps:</label> <br />
                <input type="number" id="reps" name="reps" placeholder="Enter the number of reps to perform" onChange={e => setReps(e.target.value)} /> <br/>
                <label htmlFor="weight">Weight:</label> <br />
                <input type="number" id="weight" name="weight" placeholder="Enter the weight to use" onChange={e => setWeight(e.target.value)} /> <br/>
                <label htmlFor="unit">Unit:</label> <br />
                <select value={selectValue} onChange={handleSelectChange}>
                    <option value={"lbs"}>lbs</option>
                    <option value={"kg"}>kg</option>
                </select> <br />
                <label htmlFor="date">Date:</label> <br />
                <input type="text" id="date" name="date" placeholder="Enter the date to perform the exercise (MM-DD-YY)" onChange={e => setDate(e.target.value)} /> <br/>
                <button type="submit">Create Exercise</button>
            </form>
        </section>
        </>
    );
};

export { CreateExercise };
