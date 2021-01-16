img="";
status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelloaded(){
    console.log("Model Loaded");
    status= true;
    objectDetector.detect(img,getResult);
} 
function getResult(error,results){
   if(error){
       console.log(error);
   }else{
       console.log(results);
   }
}

function draw(){
    image(img,0,0,640,420);

    fill("red");
    textSize(20);
    text("Dog",50,100);
    noFill();
    stroke("red");
    rect(30,60,350,300)

    fill("blue");
    textSize(20);
    text("Cat",280,140);
    noFill();
    stroke("blue");
    rect(270,60,300,300)
}