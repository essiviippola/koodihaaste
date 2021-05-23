let form = document.querySelector("#myform");

let selectedCar;
let selectedDistance;
let selectedSpeed1;
let selectedSpeed2;

let consumption = 0;

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
        output = document.getElementById("test");
        output.innerHTML = "Selected values: " + [selectedCar, selectedDistance, selectedSpeed1, selectedSpeed2];

        consumption = consumptionDict[selectedCar];
    
    }

});

window.addEventListener("orientationchange", function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;
    console.log(`ange: ${angle}, type: ${type}`);
});