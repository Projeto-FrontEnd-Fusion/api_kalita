import express from "express";
import cors from "cors";
import { corsOptions } from "./middlewares/cors";
import { ErrorHandlerMiddleware } from "./middlewares/Errors";
import serviceFormRoutes from "./routes/serviceForm.routes";
import { setupSwagger } from "./swagger";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// Swagger
setupSwagger(app);

app.use("/service-form", serviceFormRoutes);

app.get("/", (req, res) => {
  res.send("API Kalita Fotografia está online ✨");
});

app.use(ErrorHandlerMiddleware);

export default app;
