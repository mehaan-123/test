var gamestate=0;
var playercount;
var database;
var form;
var player,game;
var background
var canvas

function setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();
  game=new game();
  game.getstate()
  game.start()
}
function draw(){

}








