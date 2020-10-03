const btn = document.getElementById('btnId');
const addTimerBtn = document.getElementById('addTimer');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

addTimerBtn.addEventListener("click", (e) => {
  displayCard(hours.value, minutes.value, seconds.value);
});


function displayCard(hours, minutes, seconds) {
  let session = new Timer(hours, minutes, seconds);
  
  const container = document.querySelector('#card-container');

  const cardDiv = document.createElement('div');
  const cardHeaderDiv = document.createElement('div');
  const cardBodyDiv = document.createElement('div');
  const cardTitle = document.createElement('h1');
  const cardFooterDiv = document.createElement('div');
  const playBtn = document.createElement('button');

  cardDiv.className = "card";
  cardHeaderDiv.className = "card-header";
  cardBodyDiv.className = "card-body";
  cardTitle.className = "card-title timer";
  cardFooterDiv.className = "card-footer";
  playBtn.className = "btn btn-primary";

  container.append(cardDiv);
  cardDiv.append(cardHeaderDiv);
  cardDiv.append(cardBodyDiv);
  cardBodyDiv.append(cardTitle);
  cardDiv.append(cardFooterDiv);
  cardFooterDiv.append(playBtn);

  cardTitle.innerHTML = (hours.toString().padStart(2, "0")) + ":" +
      (minutes.toString().padStart(2, "0")) + ":" +
      (seconds.toString().padStart(2, "0"));

  playBtn.innerHTML = "Play";
  
  playBtn.addEventListener("click", session.startTimer(cardTitle));

}

/*function addTimer(hours, minutes, seconds) {

  if (hours !== "" || minutes !== "" || seconds !== "") {
    displayCard();
    addTimerToArray(new Timer(hours, minutes, seconds).startTimer());

  } else {
    alert("set your timer");
  }

}

function addTimerToArray(obj) {
  myTimer.push(obj);
}

let myTimer = [];*/

function Timer(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
};

Timer.prototype.startTimer = function(cardTitle) {

  let time = (this.hours * 3600) + (this.minutes * 60) + (this.seconds);

  let IntervalTimer = setInterval(function() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60) % 60;
    let seconds = Math.floor(time % 60);

    cardTitle.innerHTML = (hours.toString().padStart(2, "0")) + ":" +
      (minutes.toString().padStart(2, "0")) + ":" +
      (seconds.toString().padStart(2, "0"));
    time--;

    if (time < 0) {
      clearInterval(IntervalTimer);
      alert("Time's up");
    }

  }, 1000);

};
