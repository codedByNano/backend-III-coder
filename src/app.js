import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const connection = mongoose.connect(process.env.MONGO_STRING, () => {
  console.log("Conectado a la base de datos");
});

const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Adopme api",
      description: "Documentación con Swagger de nuestra api Adopt Me",
    },
  },
  apis: [`${__dirname}/docs/*.yaml`],
};

const specs = swaggerJsDoc(swaggerOptions);

app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

export default app;
