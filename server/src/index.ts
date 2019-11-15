import Express, { Application, Request, Response } from "express";

const app: Application = Express();
const port: number = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Virtual Assistant with many useful functions...');
});

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`)
});
