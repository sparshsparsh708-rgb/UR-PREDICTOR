let points = 500;
let team = [];

function updatePoints(){
  document.getElementById("points").innerText =
    "Points: " + points;
}

function submitPrediction(){

  const home =
    document.getElementById("homeGoals").value;

  const away =
    document.getElementById("awayGoals").value;

  if(home == 2 && away == 1){
    points += 50;
    alert("Exact score! +50");
  }
  else if(home > away){
    points += 25;
    alert("Correct winner! +25");
  }
  else{
    alert("Wrong prediction");
  }

  updatePoints();
}

function buyPlayer(name,price){

  if(points >= price){

    points -= price;

    team.push(name);

    const li =
      document.createElement("li");

    li.innerText = name;

    document
      .getElementById("team")
      .appendChild(li);

    updatePoints();
  }
  else{
    alert("Not enough points");
  }
}
