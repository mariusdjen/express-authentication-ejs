import express from "express";
import bodyParser from 'body-parser';

//Import routes files
import homeRouter from "./routes/home.route.js";
import registerRouter from "./routes/register.route.js";


// Créer une instance de l'application Express
const app = express();

//config
//Définir EJS comme moteur de templates
app.set("view engine", "ejs");
//Pointer le dossier des vues
app.set("views", "./views");
// Pointer le dossier static public
app.use(express.static("public"));
// Middleware pour analyser les champs texte du formulaire
app.use(bodyParser.urlencoded({ extended: true }));


//endConfig

// Définir le port sur lequel le serveur va écouter
const PORT = 3000;

//Routing
// home
app.use(homeRouter);
// Créer une autre route GET pour l'URL "/about"
app.get("/about", (req, res) => {
	res.render('about');
});

// Créer une autre route GET pour l'URL "/register"
app.use(registerRouter);

// Démarrer le serveur et écouter sur le port défini
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
