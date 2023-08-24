const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const { swaggerSpec } = require("./swagger");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/hello", (req, res) => {
  res.send("Hello");
});
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Testing

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
