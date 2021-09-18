const express = require("express")
const cors = require("cors");
const config = require("./app/config");

const app = express();

var corsOptions = {
    origin: "http://localhost:8801",
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({mesage: "Hello World!"});
});

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});