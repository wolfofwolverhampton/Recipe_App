import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'

import {userRouter} from './routes/users.js'

const app = express()

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
    "mongodb+srv://np03cs4a220204:gAG614VmeTNadCIf@recipes.isikb.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);



app.listen(4400, () => console.log("server is started!"));
