// Import du fichier de style pour la page d'erreur
import './Error.scss';

// Définition du composant 'Error'
function Error() {
  return (
    // Conteneur principal avec la classe 'err' pour appliquer le style
    <main className='err'>
      {/* Titre de la page d'erreur */}
      <h1>404</h1>
      
      {/* Message d'erreur */}
      <p>Oups! La page que vous demandez n'héxiste pas.</p>
      
      {/* Lien pour retourner à la page d'accueil */}
      <a href="/">Retournez la page d'accueil</a>
    </main>
  )
}

// Export du composant 'Error' pour l'utiliser ailleurs dans l'application
export default Error;
