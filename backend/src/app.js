import express from "express";
import { port } from "./config/index.js";

const app = express();

app.use(express.json());

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on port ${port}`);
});

export default app;
