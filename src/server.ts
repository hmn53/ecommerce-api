import express from "express";
import router from "./router";

const app = express();
app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("App running on port 8080!");
});
