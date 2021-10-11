NoseX=0;
NoseY=0;

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
  }
}