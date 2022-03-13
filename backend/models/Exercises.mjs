import mongoose from "mongoose";

// Connect to MongoDB and database "Exercises"
mongoose.connect(
    "mongodb://localhost:27017/Exercises",
    { useNewUrlParser: true }
);

// Log message once connection to MongoDB and "Exercises" database is established
mongoose.connection.once("open", () => {
    console.log("Connection to database 'Exercises' has been established.");
});

// Define Schema
const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

// Define model
const Exercise = mongoose.model("Exercise", exerciseSchema);

// Define model functions
const getExercises = () => {
    const exercisesQuery = Exercise.find({});

    return exercisesQuery.exec();
};

const getExercise = (exercise_id) => {
    const exercise = Exercise.findById({ _id: exercise_id });

    return exercise.exec();
};

const createExercise = (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ name, reps, weight, unit, date });
    
    return exercise.save()
};

const deleteExercise = async (exercise_id) => {
    const deletedExercise = await Exercise.deleteOne({ _id: exercise_id });

    return deletedExercise
};

const updateExercise = async (exercise_id, name, reps, weight, unit, date) => {
    const updated_exercise = await Exercise.replaceOne(
        { _id: exercise_id },
        {
            name,
            reps,
            weight,
            unit,
            date
        }
    )
    
    return updated_exercise;
};

export { getExercises, getExercise, createExercise, deleteExercise, updateExercise };
