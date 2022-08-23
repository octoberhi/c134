objects = [];
status="";
function preload()
{
}

function setup()
{
video = createCapture(VIDEO);
video.hide();
canvas = createCanvas(500,300);
canvas.center();
}

function modelLoaded()
{
console.log("Model is loaded");
status = true;
objectDetector.detect(video, gotResult);
}
function gotResult(error, results)
{
if(error)
{
console.error(error);
}
console.log(results);
objects=results;
}
function draw()
{
image(video, 0,0,500,300)
if(status != "")
{
for (i=0; i<objects.length;i++)
{
    document.getElementById("status").innerHTML ="Status: Objects Detected";
     document.getElementById("object_length").innerHTML ="The number of objects detected are:"+objects.length;
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    fill("red");
    percent = floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent +"%",objects[i].x+15,objects[i].y+15);
}
}
}
function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML ="Status: Detecting Objects";
   
}


