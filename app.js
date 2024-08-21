import express from "express";

// Créer une instance de l'application Express
const app = express();

//config
    //Définir EJS comme moteur de templates
     app.set('view engine', 'ejs');
     //Pointer le dossier des vues
     app.set('views', './views');
     // Pointer le dossier static public
     app.use(express.static("public"));





//endConfig

// Définir le port sur lequel le serveur va écouter
const PORT = 3000;

// Créer une route GET pour l'URL racine ("/")
app.get("/", (req, res) => {
	res.render('home');
});

// Créer une autre route GET pour l'URL "/about"
app.get("/about", (req, res) => {
	res.render('about');
});

// Démarrer le serveur et écouter sur le port défini
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
