var counter = 60;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
    captureTrafficLightChange(num);
}

function interval(){
        counter--;
        // write some code here
        if (counter == -1) {
          counter = 60;
        }

        showNumber(counter);
}

setInterval(interval, 500);
