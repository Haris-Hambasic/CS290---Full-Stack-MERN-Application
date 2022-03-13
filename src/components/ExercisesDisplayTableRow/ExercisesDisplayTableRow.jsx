import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "./styles/ExercisesDisplayTableRow.css";

const ExercisesDisplayTableRow = ({ id, name, reps, weight, unit, date, deleteExercise }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{reps}</td>
            <td>{weight}</td>
            <td>{unit}</td>
            <td>{date}</td>
            <td><Link to={`/edit-exercise/${id}`}><FiEdit2 className="edit-exercise-icon" /></Link></td>
            <td onClick={() => deleteExercise(id)}><FiTrash2 className="delete-exercise-icon" /></td>
        </tr>
    );
};

export { ExercisesDisplayTableRow };
