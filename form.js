class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","enter your name")
        this.playButton = createButton("play")
        this.input.position(width/2,height/2)
        this.playButton.position(width/2,height/2+20)
       this.greeting = createElement("h2")
       this.greeting.position(width/2,height/2)
    }
    display(){
       this.handleMousePressed() 
    }
    handleMousePressed()
  {
this.playButton.mousePressed(()=>{
    this.input.hide()
    this.playButton.hide()
    this.greeting.html("please wait for another player to join")
    playerCount += 1
    player.name = this.input.value()
    player.index = playerCount
    player.addPlayer()
    player.updateCount(playerCount)
})
  }

}