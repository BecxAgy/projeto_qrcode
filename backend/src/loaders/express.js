import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { prefix } from "./../config/index.js";
import routes from "./../api/routes/index.js";
import bodyParser from "body-parser";

export default (app) => {
  app.enable("trust proxy");

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use(helmet());

  app.disable("x-powered-by");
  app.disable("etag");

  app.use(prefix, routes);

  app.get("/", (_req, res) => {
    return res
      .status(200)
      .json({
        resultMessage: {
          en: "Project is successfully working...",
        },
        resultCode: "00004",
      })
      .end();
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Content-Security-Policy-Report-Only", "default-src: https:");
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT POST PATCH DELETE GET");
      return res.status(200).json({});
    }
    next();
  });

  app.use((_req, _res, next) => {
    const error = new Error("Endpoint could not find!");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, _next) => {
    res.status(error.status || 500);
    let resultCode = "00015";
    let level = "External Error";
    if (error.status === 500) {
      resultCode = "00013";
      level = "Server Error";
    } else if (error.status === 404) {
      resultCode = "00014";
      level = "Client Error";
    }

    return res.json({
      resultMessage: {
        en: error.message,
      },
      resultCode: resultCode,
    });
  });
};
