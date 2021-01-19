img="";
status="";
objects=[];
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
       objects=results;
       console.log(objects);
    }
}
function draw(){
    image(img,0,0,640,420);

   

    if(status!=""){
        console.log(objects);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status:Object Detected";
            fill("red");
            confidence=floor(objects[i].confidence*100);
            text(objects[i].label+" "+confidence+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
