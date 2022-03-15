import { Link } from "react-router-dom";
import { ExercisesDisplayTable } from "../../components/ExercisesDisplayTable/ExercisesDisplayTable";
import "./styles/Home.css";

const Home = () => {
    return (
        <>
            <div className="hero-container">
                <h2 className="hero-calling-title">We are training, <span className="perfected">perfected</span></h2>
                <p className="hero-calling-statement">Our fitness experts are ready to help you achieve<br />your goals and set in motion a lifetime of fitness.</p>
                <Link className="learn-more" to={"/learn-more"}>Learn More</Link>
            </div>
            <div className="exerciseDisplayTable-outer-container">
                <ExercisesDisplayTable />
                <div className="exerciseDisplayTable-inner-container">
                    <h2 className="exerciseDisplayTable-container-title">Manage your exercises</h2>
                    <p className="exerciseDisplayTable-container-statement">Our platform lets you manage your exercises by organizing everything in a table. Check out the table on the left to add new exercises!</p>
                    <Link to={"/create-exercise"} className="create-exercise-link">Create Exercise</Link>
                </div>
            </div>
        </>
    );
};

export { Home };
