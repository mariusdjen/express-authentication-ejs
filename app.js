import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

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


//Managing flash messages manually  
//session  config
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
	})
);
// end session
// Middleware pour rendre les messages de session disponibles dans les vues
app.use((req, res, next) => {
 // Assurez-vous que errorMessages est défini même s'il n'y a pas d'erreurs
 res.locals.successMessage = req.session.successMessage || null;
 res.locals.errorMessages = req.session.errorMessages || []; // Initialiser errorMessages comme tableau vide
 delete req.session.successMessage;
 delete req.session.errorMessages;
	next();
});
//Managing flash messages manually  

//endConfig

// Définir le port sur lequel le serveur va écouter
const PORT = 3000;

//Routing
// home
app.use(homeRouter);
// Créer une autre route GET pour l'URL "/about"
app.get("/about", (req, res) => {
	res.render("about");
});

// Créer une autre route GET pour l'URL "/register"
app.use(registerRouter);

// Démarrer le serveur et écouter sur le port défini
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
