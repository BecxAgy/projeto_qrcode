import express from "express";
import { port } from "./config/index.js";
import loader from "./loaders/index.js";

const app = express();

loader(app);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on port ${port}`);
});

export default app;
