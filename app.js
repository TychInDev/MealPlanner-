const proteines = ["poulet", "viande rouge", "steak", "poisson"];
const glucides = ["pâtes", "riz", "quinoa", "patates douces"];
const legumes = ["brocoli", "haricots verts", "chou-fleur", "carottes"];

function genererPlanAlimentaire() {
  const joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const planAlimentaire = [];

  for (let i = 0; i < joursSemaine.length; i++) {
    const plat = {
      proteine: proteines[Math.floor(Math.random() * proteines.length)],
      glucide: glucides[Math.floor(Math.random() * glucides.length)],
      legume: legumes[Math.floor(Math.random() * legumes.length)],
    };

    planAlimentaire.push(plat);
  }

  const tableauResultat = document.getElementById("tableau-resultat");

  for (let i = 0; i < planAlimentaire.length; i++) {
    const plat = planAlimentaire[i];

    const nouvelleRangee = tableauResultat.insertRow();
    const jourCellule = nouvelleRangee.insertCell();
    jourCellule.textContent = joursSemaine[i];

    const proteineCellule = nouvelleRangee.insertCell();
    proteineCellule.textContent = plat.proteine;

    const glucideCellule = nouvelleRangee.insertCell();
    glucideCellule.textContent = plat.glucide;

    const legumeCellule = nouvelleRangee.insertCell();
    legumeCellule.textContent = plat.legume;
  }
}


function effacerPage() {
    location.reload();
  }
  