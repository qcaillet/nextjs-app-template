import PrimaryLayout from '@/app/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/app/components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Exemple de mise en page</h2>
      <p>
        Cet exemple ajoute une propriété getLayout à votre page, vous permettant
        de renvoyer un composant React pour la mise en page. Cela vous permet de
        définir la mise en page spécifique à chaque page. Comme nous renvoyons
        une fonction, nous pouvons avoir des mises en page imbriquées complexes
        si nécessaire.
      </p>
      <p>
        Lors de la navigation entre les pages, nous souhaitons conserver létat
        de la page (valeurs des champs de saisie, position de défilement, etc.)
        pour une expérience d&apos;application sur une seule page (SPA).
      </p>
      <p>
        Ce modèle de mise en page permettra de conserver l&apos;état car
        l&apos;arborescence des composants React est conservée entre les
        transitions de page. Pour préserver l&apos;état, nous devons empêcher
        l&apos;arborescence des composants React d&apos;être supprimée entre les
        transitions de page.
      </p>
      <h3>essayez</h3>
      <p>
        essayez de saisir du texte dans le champ de recherche de la barre
        latérale, puis changez de page. Vous remarquerez que l&apos;état du
        champ de saisie est conservé.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
