import express from 'express';
import cors from 'cors';
import usersRouter from './controllers/usersContoller.js';

const app = express();
app.use(cors()); // Enabling Cross Origin
app.use(express.json());

app.use("/users", usersRouter); //Register the controller

app.get("/", (req, res)=>{
    res.json({msg: "Hello World from app.js"});
});

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:" + PORT);
});