function showMessage() {

    alert("Welcome to Multimedia World!");

}


function changeCircle() {

    let circle =
        document.getElementById("interactive-circle");

    circle.style.background = "#4b4ded";

    circle.style.transform = "rotate(360deg) scale(1.2)";

    circle.innerText = "Great!";

}