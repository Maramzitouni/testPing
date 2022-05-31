let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

function start(){

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 40;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
var url= document.getElementById("url").value;
var interval= document.getElementById("interval").value;


function ping(host, pong) {
  var started = new Date().getTime();
  
  var http = new XMLHttpRequest();

  http.open("GET", "http://" + host + ":", /*async*/true);
  http.onreadystatechange = function() {
    if (http.readyState == 4) {
      var ended = new Date().getTime();

      var milliseconds = ended - started;

      if (pong != null) {
        pong(milliseconds);
      }
    }
  };
  try {
    http.send(null);
  } catch(exception) {
    // this is expected
  }
  
}
const list = document.getElementById("list");
list.innerHTML = ``;

var interv = 1000*interval;
if (url.length>0){
  
    
setTimeout(() => {  ping(url, function(m){ if (m>0){list.innerHTML += ` <li style="color:white;"> ${" "+m+" milisecondes."}</li>` }else{list.innerHTML = ``;}})
}, interv);

  

}else if(url.length<=0){
    list.innerHTML = `site non valide`;
}

}
