const EventEmiiter=require('events')

const celebrity=new EventEmiiter();


celebrity.on('race win',()=>{
    console.log("you win")
})

celebrity.on('race win',()=>{
    console.log("I have tried better than you !")
})

celebrity.emit('race win')