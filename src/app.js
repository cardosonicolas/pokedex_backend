const express = require("express");
const { Sequelize } = require("./database/db");
const app = express();
const sequelize = require("./database/db");
const Pokemon = require("./database/models/Pokemon");

// Setting
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas

app.get("/", function (req, res) {
    Pokemon.findAll().then((pokes) => {
        res.status(200).json(pokes);
    });
});

app.get("/pokemon", (req, res) => {
    const { type, attack } = req.query;

    Pokemon.findAll({
        where: Sequelize.and(Sequelize.or({ type1: type }, { type2: type }), {
            attack,
        }),
    }).then((pokes) => {
        res.json(pokes);
    });
});

app.get("/pokemon/:id", (req, res) => {
    const { id } = req.params;

    if (Number(id)) {
        Pokemon.findByPk(id).then((poke) => {
            res.json(poke);
        });
    }
});

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arranado en http://localhost:${PORT}`);

    sequelize
        .sync({ force: false })
        .then(() => {
            console.log("Nos hemos conectado a la base de datos");
        })
        .catch((error) => {
            console.log("Se ha producido un error", error);
        });
});
