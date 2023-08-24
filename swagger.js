const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce Api Docs",
      version: "1.0.0",
    },
  },
  apis: [path.join("./specifications.yaml")],
};

module.exports = {
  swaggerSpec: swaggerJSDoc(options),
};
