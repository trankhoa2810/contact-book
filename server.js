const express = require("express")
const cors = require("cors");
const config = require("./app/config");
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError } = require("./app/helpers/errors");
const { response } = require("express");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081",
}

app.use(cors({ origin: config.app.origins }));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application."});
});

setupContactRoutes(app);

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Sever Error",
    });
});

// set port, listen for requests
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});