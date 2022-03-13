import { useState, useEffect } from "react";
import { ExercisesDisplayTableRow } from "../../components/ExercisesDisplayTableRow/ExercisesDisplayTableRow";
import "./styles/ExercisesDisplayTable.css";

const ExercisesDisplayTable = () => {
    const [exercises, setExercises] = useState([]);

    const getExercises = async () => {
        await fetch("http://localhost:3000/exercises", { method: "GET" })
            .then(data => data.json())
            .then(exercises => {
                setExercises(exercises);
            })
            .catch(error => console.log(error));
    };

    const deleteExercise = (id) => {
        fetch(`http://localhost:3000/exercises/${id}`, { method: "DELETE" })
            .then(dataJSON => dataJSON.json())
            .then(deleted_exercise_acknowledgement => {
                const updatedExercises = exercises.filter(exercise => exercise._id != id);
                setExercises(updatedExercises);
            })
            .catch(error => console.log(error));
    };

    const displayExercisesRows = () => {
        return exercises.map((exercise, key) => <ExercisesDisplayTableRow key={key} id={exercise._id} name={exercise.name} reps={exercise.reps} weight={exercise.weight} unit={exercise.unit} date={exercise.date} deleteExercise={deleteExercise} />);
    };

    useEffect(() => {
        getExercises()
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {displayExercisesRows()}
            </tbody>
        </table>
    );
};

export { ExercisesDisplayTable };
