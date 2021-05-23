let form = document.querySelector("#myform");

form.addEventListener("change", function(e){
    console.log("Something changed!")

    let selectedCar;
    let selectedDistance;
    let selectedSpeed1;
    let selectedSpeed2;

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
    
    console.log("Selected values: ", [selectedCar, selectedDistance, selectedSpeed1, selectedSpeed2]);

});

window.addEventListener("orientationchange", function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;
    console.log(`ange: ${angle}, type: ${type}`);
});