var cat, catImg, catWalkingImg,happyCatImg, mouse, mouseImg, mouseTeasingImg, happyMouseImg, bg, bgImg

function preload() {
    catImg=loadImage("images/cat1.png")
    catWalkingImg=loadAnimation("images/cat2.png","images/cat3.png")
    happyCatImg=loadImage("images/cat4.png")
    mouseImg=loadImage("images/mouse4.png")
    mouseTeasingImg=loadAnimation("images/mouse2.png","images/mouse3.png")
    happyMouseImg=loadImage("images/mouse1.png")
    bgImg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(800,600);
    
    bg=createSprite(400,300)
    bg.addImage("bg",bgImg)
    bg.scale=1.1
    
    cat=createSprite(700,500)
    cat.addImage("catSitting",catImg)
    cat.scale=0.15

    mouse=createSprite(100,500)
    mouse.addImage("mouseSitting",mouseImg)
    mouse.addImage("happyMouse",happyMouseImg)
    mouse.scale=0.15
}
 
function draw() {

    background(0);
    
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addImage("happyCat",happyCatImg)
        cat.changeImage("happyCat")
        mouse.addImage("happyMouse",happyMouseImg)
        mouse.changeImage("happyMouse")
        cat.velocityX=0
        cat.x=225
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseTeasingImg)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=10
    cat.addAnimation("catWalking",catWalkingImg)
    cat.changeAnimation("catWalking")
    cat.velocityX=-1
  }

  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseTeasingImg)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=10
    cat.addAnimation("catWalking",catWalkingImg)
    cat.changeAnimation("catWalking")
    cat.velocityX=-1
  }
  
}
