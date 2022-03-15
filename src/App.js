import { Home } from "./pages/Home/Home";
import { CreateExercise } from "./pages/CreateExercise/CreateExercise";
import { EditExercise } from "./pages/EditExercise/EditExercise";
import { LearnMore } from "./pages/LearnMore/LearnMore";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-exercise" element={<CreateExercise />} />
            <Route path="/edit-exercise/:exercise_id" element={<EditExercise />} />
            <Route path="/learn-more" element={<LearnMore />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
