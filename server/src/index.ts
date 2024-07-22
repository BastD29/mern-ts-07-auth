import express from "express";
import cors from "cors";
import { ALLOWED_ORIGIN, NODE_ENV, PORT } from "./config/environments";
import email from "./routes/email";

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (
      !origin ||
      origin.includes("Postman") ||
      (ALLOWED_ORIGIN as string).includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", email);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, ${NODE_ENV} environment`);
});
