import express, { Request, Response } from "express";
import cors from "cors";
import { corsOptions } from "./middlewares/cors";
import { ErrorHandlerMiddleware } from "./middlewares/Errors";
import { setupSwagger } from "./swagger";
import serviceFormRoutes from "./routes/serviceForm.routes";


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send(`Api is running on port ${res.req.socket.localPort}`);
});

// Configuração do Swagger
setupSwagger(app);

// Rotas principais
app.use("/service-form", serviceFormRoutes);

// Middleware global de erros
app.use(ErrorHandlerMiddleware);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
