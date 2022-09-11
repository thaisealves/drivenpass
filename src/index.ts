import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import router from "./routers/routesIndex";
import errorHandler from "./middlewares/errorHandler";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
