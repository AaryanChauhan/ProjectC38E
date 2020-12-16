class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      p1 = createSprite(100,200);
      p1.addImage(p1Img);
      p2 = createSprite(300,200);
      p2.addImage(p2Img);
      p3 = createSprite(500,200);
      p3.addImage(p3Img);
      p4 = createSprite(700,200);
      p4.addImage(p4Img);
  
      players = [p1,p2,p3,p4];
    }
  
    play(){
      form.hide();
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(backgroundImage,0,-displayHeight*4,displayWidth,displayHeight*5);
        //var display_position = 130;
        var index = 0;
        var x = 175;
        var y;
        for(var plr in allPlayers){
          index += 1;
          x = x+200;
          y = displayHeight - allPlayers[plr].distance;
          players[index-1].x = x;
          players[index-1].y = y;
          if(index === player.index) {
            players[index-1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = players[index-1].y;
          }
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 10;
        player.update();
      }
      if(player.distance > 3850) {
        gameState = 2;
      }
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }