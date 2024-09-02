export const registerIndex = (req, res) => {
	res.render("register");
};
export const registerUser = (req, res) => {
    const { nom, email } = req.body;

   ////Managing flash messages manually   
    // Initialise un tableau pour stocker les messages d'erreur
    let errors = [];

    // Validation pour le champ "nom"
    if (!nom.trim() || nom.trim().length < 2 || nom.trim().length > 50) {
        errors.push('Le champ "Nom" est obligatoire et doit comporter entre 2 et 50 caractères.');
    }

    // Validation pour le champ "email"
    if (!email.trim() || email.trim().length < 2 || email.trim().length > 50 ) {
        errors.push('Le champ "Email" est obligatoire et doit être une adresse email valide et doit comporter entre 2 et 50 caractères..');
    }
    // Vérification si des erreurs existent
    if (errors.length > 0) {
        // Stocker les messages d'erreur dans la session
        req.session.errorMessages = errors;
        return res.redirect('/register');
    }
////Managing flash messages manually  

    // Si l'inscription réussit (aucune erreur)
    req.session.successMessage = 'Inscription réussie. Bienvenue !';
    res.redirect('/register');
};
