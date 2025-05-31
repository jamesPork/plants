const plant = {
    water: 0,
    sun: 0,
    love: 0,
    growth: 0
}

function updateStatus() {
  const status = document.getElementById("plant-status");

  if (plant.water < 2) status.textContent = "Your plant is thirsty!";
  else if (plant.sun < 2) status.textContent = "Your plant needs sunlight!";
  else if (plant.love < 2) status.textContent = "Your plant feels lonely.";
  else if (plant.growth >= 10) status.textContent = "Your plant is blooming beautifully!";
  else status.textContent = "Your plant is doing good";
}

function waterPlant() {
  plant.water = Math.min(plant.water + 2, 10);
  plant.growth += 0.5;
  updateStatus();
  updatePlantImage();
}

function giveSun() {
  plant.sun = Math.min(plant.sun + 2, 10);
  plant.growth += 0.5;
  updateStatus();
  updatePlantImage();
}

function petPlant() {
  plant.love = Math.min(plant.love + 2, 10);
  plant.growth += 0.5;
  updateStatus();
  updatePlantImage();
}

function updatePlantImage() {
  const img = document.getElementById("plant-img");
  if (plant.growth < 5) img.src = "seedling.png";
  else if (plant.growth < 10) img.src = "medium-plant.png";
  else img.src = "flowering-plant.png";
}