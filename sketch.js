let video;
let modelUrl="https://teachablemachine.withgoogle.com/models/V-EPERbV/model.json";
let classifier;
function preload(){
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/V-EPERbV/model.json",modelReady)
}
function setup(){
    createCanvas(300,300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    background(0);
    image(video,0,0,width,height);
    classify();  
}
function classify(){
    classifier.classify(video,gotResult);
}
function gotResult(err,res){
    textSize(22);
    fill(255,255,255);
    textAlign(CENTER);
    text(res[0].label,width/2,height);
    console.log(res[0].confidence);
}
function modelReady(){
    console.log("Model Loaded");
}