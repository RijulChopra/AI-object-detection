status = "";

objects = [];

function setup()
{
    canvas = createCanvas(350, 250);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    video.play();
}

function modelLoaded()
{
    console.log("Model Loaded!!");
    status = true;
}