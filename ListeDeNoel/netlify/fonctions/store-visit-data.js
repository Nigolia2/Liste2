exports.handler = async (event, context) => {
    try {
        const data = JSON.parse(event.body);
        console.log('Données de visite reçues:', data);

        // Ajoutez ici votre logique pour stocker les données (par ex., dans une base de données)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Données reçues avec succès' }),
        };
    } catch (error) {
        console.error('Erreur dans la fonction Netlify:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur lors du traitement des données' }),
        };
    }
};
