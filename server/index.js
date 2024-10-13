import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import sequelize from "./config/db.js";
import mainRoutes from "./routes/mainRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import "./models/User.js";
import "./models/Template.js";
import "./models/Question.js";
import "./models/Form.js";
import "./models/Answer.js";
import "./models/TemplateTag.js";
import "./models/Like.js";
import "./models/Comment.js";
import "./models/Tag.js";
import "./models/Topic.js";
import "./models/associations.js";

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/", mainRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    await sequelize.authenticate({ force: true });
    console.log(
      "Connection to the database has been established successfully."
    );

    await sequelize.sync();
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
