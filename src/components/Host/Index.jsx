// Cette fonction s'appelle Host et elle prend un objet avec une propriété host comme argument
function Host ({ host }) {

  // On sépare le nom et le prénom de l'hôte en utilisant l'espace comme séparateur
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  // On rend le contenu JSX qui affiche le nom et le prénom de l'hôte et son image
  return (
    <div className="product__content__right__host">
      <div className="product__content__right__host__name">
        <p className="product__content__right__host__name__firstname">{name}</p>
        <p className="product__content__right__host__name__lastname">{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="product__content__right__host__picture" />
    </div>
  );
};

// On exporte cette fonction pour qu'elle puisse être utilisée dans d'autres fichiers
export default Host;