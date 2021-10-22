LWX=0;
RWX=0;

NoseX=0;
NoseY=0;

distance=0;

function preload(){

}

function setup(){
  canvas=createCanvas(500,500)  
  canvas.center()
  video=createCapture(VIDEO)
  video.size(500,500)

  poseNet=ml5.poseNet(video,modelLoaded)
  poseNet.on('pose',gotposes)
}

function draw(){
background('#00FFFF')

textSize(distance)
text('Tanu', NoseX,NoseY)

}

function modelLoaded(){
  console.log('model is loaded')
}

function gotposes(results){
  if(results.length>0){
    console.log(results)

    NoseX=results[0].pose.nose.x 
    NoseY=results[0].pose.nose.y

    LWX=results[0].pose.leftWrist.x
    RWX=results[0].pose.rightWrist.x
    distance=Math.floor(LWX-RWX)
    console.log(distance)
    document.getElementById("square_sides").innerHTML="Sides Of The Square " + distance
  }
}