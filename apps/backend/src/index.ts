import express, { Express, Request, Response } from "express";

let app: Express = express();
let port:number = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Express and TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

