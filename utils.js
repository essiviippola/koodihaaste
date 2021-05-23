let form = document.querySelector("#myform");

let selectedCar;
let selectedDistance;
let selectedSpeed1;
let selectedSpeed2;

const consumptionDict = {"A": 3.0, "B": 3.5, "C": 4.0};

form.addEventListener("change", function(e){
    // console.log("Something changed!")

    const rbs = document.querySelectorAll("input[name='car-type'")
    for(const rb of rbs){
        if(rb.checked){
            selectedCar = rb.value;
            break;
        }
    }

    selectedDistance = document.querySelector("#distance").value;
    selectedSpeed1 = document.querySelector("#speed1").value;
    selectedSpeed2 = document.querySelector("#speed2").value;

    if(selectedCar && selectedDistance && selectedSpeed1 && selectedSpeed2){

        let msg = [];
        let time1 = selectedDistance / selectedSpeed1;
        let time2 = selectedDistance / selectedSpeed2;
        let timeDiff = time1 - time2;
        let consumption = consumptionDict[selectedCar];
        let consumption_total = consumption * selectedDistance / 100;

        msg.push("Aika1: " + time1 + " h");
        msg.push("Aika2: " + time2 + " h");
        msg.push("Time difference: " + timeDiff + " h");
        msg.push("Consumption: " + consumption_total + " l");
        msg = msg.join("<br/>");

        document.getElementById("test").innerHTML = msg
        console.log(msg);
    
    }

});

window.addEventListener("orientationchange", function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;
    console.log(`ange: ${angle}, type: ${type}`);
});