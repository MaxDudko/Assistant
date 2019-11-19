import Express, { Application, Request, Response } from "express";
import Mongoose from "mongoose";
import bodyParser from "body-parser";

const app: Application = Express();
const port: number = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

Mongoose.connect('mongodb://localhost:27017/AssistantDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(() => {
        console.log('Mongodb connection failed...')
    });

app.get('/', (req: Request, res: Response) => {
    res.send('Virtual Assistant with many useful functions...');
});

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`)
});
