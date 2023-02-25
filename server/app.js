import express from "express";
import http from "http";
import logger from "./utils/logger";
import db from "./db";

import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const app = express();
const router = express.Router();
const server = http.createServer(app);

const apiRoot = "/api";
app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use("/health", (_, res) => res.sendStatus(200));
app.use(apiRoot, router);
app.use(clientRouter(apiRoot));
app.use(logErrors());

router.get("/", (_, res) => {
	res.json({ message: "Hello from Travel App!" });
  logger.info('Hello from Node');
});

router.get("/version", (req, res) => {
  db.query("select version()")
    .then((result) => {
      res.status(200).send(result.rows[0]);
    })
    .catch((err) => {
      console.error(err);
    });
});

export default server;
export {app, router, server};
