import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import * as Exercises from "./models/Exercises.mjs";

dotenv.config()

const PORT = process.env.PORT

// Represents application server instance
const fullStackMERNApp = express();

fullStackMERNApp.use(express.json());
fullStackMERNApp.use(bodyParser.json());
fullStackMERNApp.use(express.urlencoded({ extended: true }));
fullStackMERNApp.use(cors());

fullStackMERNApp.delete("/exercises/:id", (req, res) => {
    Exercises.deleteExercise(req.params.id)
        .then(deletedExercise => res.status(200).json(deletedExercise))
        .catch(error => res.status(500).json(error));
});

fullStackMERNApp.put("/exercises/:id", (req, res) => {
    console.log("here............");
    Exercises.updateExercise(
        req.params.id,
        req.body.name,
        req.body.reps,
        req.body.weight,
        req.body.unit,
        req.body.date
    )
    .then(updated_exercise => res.status(200).json(updated_exercise))
    .catch(error => res.status(500).json(error));
});

fullStackMERNApp.get("/exercises/:id", (req, res) => {
    console.log("CONTROLLER exercise_id", req.params);
    Exercises.getExercise(req.params.id)
        .then(retrieved_exercise => res.status(200).json(retrieved_exercise))
        .catch(error => res.status(500).json(error))
});

fullStackMERNApp.post("/exercises", (req, res) => {
    console.log("Inside /exercises (POST)")
    console.log("Submitted form:", req.body)
    Exercises.createExercise(
        req.body.name,
        req.body.reps,
        req.body.weight,
        req.body.unit,
        req.body.date
    )
    .then(createdExercise => res.status(201).json(createdExercise))
    .catch(error => res.status(500).json(error))
});

fullStackMERNApp.get("/exercises", (req, res) => {
    const exercises = Exercises.getExercises()
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(error => res.status(500).json(error));
});

fullStackMERNApp.listen(PORT, () => {
    console.log(`Connected to ${PORT}...`);
});
