function preload() {}

function draw() {}

function setup() {
    canvas = createCanvas(450, 460);
    video = createCapture(VIDEO);
    video.size(300, 300);
    canvas.position(310, 100);
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on("pose",gotPoses);
}
function gotPoses(results){
    if(  results.length>0){
        console.log=(results)
    }
}
function modelloaded(){
    console.log("posenet is loaded");
}