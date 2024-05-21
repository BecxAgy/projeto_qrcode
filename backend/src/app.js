import express from "express";
import { port } from "./config/index.js";
import loader from "./loaders/index.js";
import routes from "./api/routes/index.js";

const app = express();

app.use(express.json());

loader(app);
routes(app);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on port ${port}`);
});

export default app;
