import el from "../images/el.png";
import sw from "../images/sw.png";
import we from "../images/we.png";
import nails from "../images/nails.png";

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>
          AGIR
          <br />
          POUR LA PROTECTION DE L'ENVIRONNEMENT
        </h1>
        <div>
          <h2>Dépassement des ressources de la planète</h2>
          <p>
            Le 1er août 2024 a été déclaré «jour du dépassement des ressources
            de la planète»*. Les calculs de Global Footprint Network indiquent
            qu’à ce rythme, les humains auraient besoin de 1,7 planète pour
            subvenir à leurs besoins.
            <br />
            On peut dire qu’on va vivre à crédit jusqu’à l’année prochaine
            puisqu’on a consommé tout ce qu’on avait en banque...
          </p>
        </div>
        <div>
          <h2>Se questionner...</h2>
          <p>
            Mais comment participer à la protection de notre environnement dans
            un monde qui nous dépasse?
            <br />
            La France compte quelque 17 millions de jardiniers et la superficie
            totale des jardins couvrirait près d'un million d'hectares… soit
            autant que nos réserves naturelles !**
          </p>
        </div>
        <div>
          <h2>... AGIR</h2>
          <p>
            Pour le réseau des CPIE (union nationale des Centres Permanents
            d'Initiatives pour l'Environnement), le jardin n’est pas seulement
            un espace de démonstration de techniques ou un support dédié à la
            sensibilisation : il constitue un <strong>levier</strong> de
            mobilisation citoyenne sur des sujets environnementaux à forts
            enjeux : économies d’eau, adaptation au changement climatique,
            préservation de la biodiversité, gestion intégrée des eaux
            pluviales, souveraineté alimentaire…
          </p>
          <p>
            Vous l'avez compris, vous, particulier, pouvez être acteur de ce
            changement. Non seulement dans la pratique, mais aussi et surtout,
            dans la transmission de vos savoirs.
          </p>
        </div>
        <div>
          <h2>Hortus se propose comme plateforme d'échanges</h2>
          <p>
            Voilà notre action: mettre à disposition, gratuitement, une
            platerforme pour nous motiver, et s'engager, tous ensemble. S'unir
            pour la protection de notre Terre Mère. Car agir aujourd'hui, c'est
            nous protéger. Et aussi protéger les générations de demain...
            <br />
            Dîtes-nous comment semer notre graine !
          </p>
        </div>
        <div className="references">
          <p>
            *Chiffres issus de "LEDEVOIR",
            https://www.ledevoir.com/environnement/817452/1er-aout-2024-jour-depassement-ressources-planete
            <br />
            **Chiffres issus de "LE FIGARO",
            https://www.lefigaro.fr/jardin/2015/03/20/30008-20150320ARTFIG00027-17millions-de-jardiniers8230-et-vous-et-vous-et-vous.php
          </p>
        </div>
      </div>
      <div className="content">
        <h2 className="qui" id="qui">QUI SOMMES-NOUS ?</h2>
        <div>
          <h2>
            Une association engagée
            <br />
            pour un environnement naturel et durable
          </h2>
          <p>
            Issus de parcours hétéroclites, nous sommes sensibles à chaque
            dégradation ou amélioration du milieu naturel. Ce qui nous unit
            avant tout est la passion de la Nature.
            <br />
            Soucieux de notre avenir et de celui de notre descendance, ensemble,
            nous avons créé l'association "Hortus" pour promouvoir la
            préservation de l'environnement. Cette plateforme est à votre
            disposition afin de transmettre votre expérience et motiver la
            création et l'entretien de jardins durables.
          </p>
          <p>
            Conscients de l'importance de chaque petite parcelle, nous avons un
            credo: "il n'y a pas de petit jardinier, nous sommes tous des
            acteurs de la nature". <br />
            Faîtes-passer...
          </p>
        </div>
      </div>
      <div className="content">
        <h2 className="partenaires">NOS PARTENAIRES</h2>
        <div className="partenairesDiv">
          <img src={el} alt="Electric Level" />
          <img src={sw} alt="Surf Wave" />
          <img src={we} alt="Welcome" />
          <img src={nails} alt="Pink Nails" />
        </div>
      </div>
    </div>
  );
}
