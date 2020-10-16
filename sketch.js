//Create variables here
var dog,happydDog,database,foodStock,foodS;

function preload(){
  //load images here
  dogimg = loadImage("mac.png");
  dogimg2 = loadImage("mac2.png");
}

function setup() {
  var canvas = createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref('food');

  foodStock.on("value",readStock);
  dog = createSprite(250,300,10,10);
  dog.addImage(dogimg2);
  dog.scale=0.6
  happy = createSprite(250,300,10,10);
  happy.addImage(dogimg)
  happy.visible=false
  happy.scale=0.3
}

function draw() {  
background("#caadc2");
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  happy.visible=true
  dog.visible=false
}
  drawSprites();
  //add styles here
  fill("black");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Key To Feed My MAC",80,70);
  
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}