var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var people,people1,people2,people3,people4;

function setup(){
  canvas = createCanvas(1000,550);
  database = firebase.database();

  gift = new Gift();

  game = new Game();
  game.getState();
  game.start();

  feed = createButton("GIVE THE GIFTS");
  feed.position(1100,80);
  feed.mousePressed(giveGifts);
  
  add = createButton("ADD GIFTS");
  add.position(1100,40);
  add.mousePressed(addGift);

}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  gift.display();

}

  function addGift(){
   position++
   database.ref('/').update({
    Food : position
  })
  drawSprites();
}
function giveGifts(){
  food1.updateGiftStock(food1.getGiftStock()-1)
  database.ref('/').update({
    Gift : gift.getGiftStock(),
    FeedTime : i++
  })
}