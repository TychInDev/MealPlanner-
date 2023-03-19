const proteins = ["poulet", "viande rouge", "steak", "poisson"];
const carbohydrates = ["pâtes", "riz", "quinoa", "patates douces"];
const vegetables = ["brocoli", "haricots verts", "chou-fleur", "carottes"];

function generateMealPlan() {
  const dayWeek = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"];
  const mealPlan = [];

  for (let i = 0; i < dayWeek.length; i++) {
    const food = {
      protein: proteins[Math.floor(Math.random() * proteins.length)],
      carbohydrate: carbohydrates[Math.floor(Math.random() * carbohydrates.length)],
      vegetable: vegetables[Math.floor(Math.random() * vegetables.length)],
    };

    mealPlan.push(food);
  }

  const mealResult = document.getElementById("results-table");

  for (let i = 0; i < mealPlan.length; i++) {
    const food = mealPlan[i];

    const newRow = mealResult.insertRow();
    const dayCell = newRow.insertCell();
    dayCell.textContent = dayWeek[i];

    const proteinCell = newRow.insertCell();
    proteinCell.textContent = food.protein;

    const carbohydratesCell = newRow.insertCell();
    carbohydratesCell.textContent = food.carbohydrate;

    const vegetableCell = newRow.insertCell();
    vegetableCell.textContent = food.vegetable;
  }
}


function cleanPage() {
    location.reload();
  }
  