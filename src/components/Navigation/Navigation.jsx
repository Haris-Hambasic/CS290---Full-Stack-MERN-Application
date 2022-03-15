import { Link } from "react-router-dom";
import { GiWeightLiftingUp } from "react-icons/gi"
import "./styles/Navigation.css";

const Navigation = () => {
    return (
        <header className="navigation-outer-container">
            <div className="navigation-inner-container">
                <Link to={"/"} className="logo-container">
                    <GiWeightLiftingUp className="logo-icon" />
                    <div>
                        <h1 className="logo-text">EliteFit</h1>
                        <p className="logo-statement">Exercise tracking made simple</p>
                    </div>
                </Link>
                <nav className="nav">
                    <ul className="nav-links">
                        <Link to={"/"} className="nav-links-link"><li className="home">Home</li></Link>
                        <Link to={"/create-exercise"} className="nav-links-link"><li className="create-exercise">Create Exercise</li></Link>
                    </ul>    
                </nav>
            </div>
        </header>
    );
};

export { Navigation };
