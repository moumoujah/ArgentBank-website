const apiUrl = "http://localhost:3001/api/v1/";

// Authentification de L'email ou le mot de passe dans le formulaire 
export const fetchLoginUser = async (email, password) => {
    try {
        const response = await fetch(`${apiUrl}user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        if (response.status === 400) {    //Alerte si une erreur de saisie email ou mot de passe
            alert("Mail ou mot de passe invalide");
        } 
        const data = await response.json();
        return data;
    } 
    catch (err) {
        console.error(err);
    };
};

// Récupération des données quand l'utilisateur est connecté
export const fetchProfileUser= async (token) => {
    try {
        const response = await fetch(`${apiUrl}user/profile`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } 
    catch (err) {
        console.log(err);
    }
};

// Modification du UserName du user connecté pour la page user
export const putUserName = async (token, newUserName) => {
    try {
        const response = await fetch(`${apiUrl}user/profile`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userName: newUserName }),
        });
        
        if (response.ok) {
            return true;
        } else {
            return false;
        }

    } catch (err) {
        console.error(err);
    }
};