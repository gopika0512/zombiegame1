class Game{
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        player = new Player()
          player.getCount()

       form = new Form()
       form.display() 

       player1 = createSprite(10,height/2)
       player1.addAnimation("p1running",player1Img)
       player2 = createSprite(10,height/2+100)
       player2.addAnimation("p2running",player2Img)
       

      
    }
    play(){
        drawSprites()
        
    }
}