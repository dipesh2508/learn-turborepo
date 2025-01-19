import express, { Express, Request, Response } from "express";
import {message} from "@repo/common/src"

console.log(message)

let app: Express = express();
let port:number = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

