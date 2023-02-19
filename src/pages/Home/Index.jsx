// Import des composants nécessaires
import Banner from '../../components/Banner/Index';
import Card from '../../components/Card/Index';

// Définition du composant 'Home'
function Home() {
  return (
    // Conteneur principal
    <main>
      {/* Composant 'Banner' */}
      <Banner />
      
      {/* Composant 'Card' */}
      <Card/>
    </main>
  );
}

// Export du composant 'Home' pour l'utiliser ailleurs dans l'application
export default Home;
