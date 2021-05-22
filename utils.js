let form = document.querySelector("#myform");

form.addEventListener("change", function(e){
    console.log("Something changed!")
});

window.addEventListener("orientationchange", function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;
    console.log(`ange: ${angle}, type: ${type}`);
});