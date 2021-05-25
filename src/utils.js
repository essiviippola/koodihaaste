let form = document.querySelector("#myform");

let selectedCar;
let selectedDistance;
let selectedSpeed1;
let selectedSpeed2;

const consumptionDict = { "A": 3.0, "B": 3.5, "C": 4.0 };

function convertTimeFormat(hours) {
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    if (rhours > 0) {
        return rhours + " hour(s) and " + rminutes + " minute(s).";
    } else {
        return rminutes + " minute(s)."
    }
}

form.addEventListener("change", function (e) {
    // console.log("Something changed!")

    const rbs = document.querySelectorAll("input[name='car-type'")
    for (const rb of rbs) {
        if (rb.checked) {
            selectedCar = rb.value;
            break;
        }
    }

    selectedDistance = document.querySelector("#distance").value;
    selectedSpeed1 = document.querySelector("#speed1").value;
    selectedSpeed2 = document.querySelector("#speed2").value;

    if (selectedCar && selectedDistance && selectedSpeed1 && selectedSpeed2) {

        let msg = [];
        let time1 = selectedDistance / selectedSpeed1;
        let time2 = selectedDistance / selectedSpeed2;
        let timeDiff = time1 - time2;
        let consumption = consumptionDict[selectedCar];
        // To-do: incorrect consumption
        let consumption1 = 1.009 ^ selectedSpeed1 * consumption;
        let consumption2 = 1.009 ^ selectedSpeed2 * consumption;

        msg.push("Aika1: " + convertTimeFormat(time1));
        msg.push("Aika2: " + convertTimeFormat(time2));
        msg.push("Time difference: " + convertTimeFormat(timeDiff));
        //msg.push("Consumption1: " + consumption1 + " l");
        //msg.push("Consumption2: " + consumption2 + " l");

        msg = msg.join("<br/>");

        document.getElementById("test").innerHTML = msg

    }

});

window.addEventListener("orientationchange", function (e) {
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;
    console.log(`ange: ${angle}, type: ${type}`);
});
