
function allLightsOff(){
    var lights = document.querySelectorAll('.light');
    for (var i = 0; i < lights.length; i++) {
        var light = lights[i];
        light.classList.remove('on');
    }

      // document.querySelectorAll('.light').forEach(function(light){
      //   light.classList.remove('on');
      // });

}

function switchOn(className){
  allLightsOff();
  var redLight = document.querySelector(className);
  redLight.classList.add('on');
}

function go(){
  switchOn('.go');
}

function caution(){
  switchOn('.caution');
}

function stop(){
  switchOn('.stop');
}



function captureTimeChange(cb){
  var timeLeft = document.querySelector("#timeLeft");
  var number = document.querySelector("#number");

  console.log(timeLeft);

  timeLeft.addEventListener("keyup", function(evt){
      var num = Number(evt.target.value);
      if(num < 0 || num > 60){
      	timeLeft.Value=0;
      }
  number.innerHTML = num;
    setTimeout(function(){
      cb(num);


}, 500)
  });
}


/*
var counter = 60;
setInterval(function(){
  counter--;
  if (counter >= 40){
    go();
  }
  else if (counter < 40 && counter > 30){
    caution();
  }
  else{
    stop();
  }
  if (counter == 0){
    counter = 60;
  }

}, 500);*/
showNumber(counter);
