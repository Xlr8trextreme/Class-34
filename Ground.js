class Ground{
    constructor(){
        this.body = Bodies.rectangle(width/2,height-20,width,20,{isStatic:true})
        World.add(myWorld,this.body)
    }

display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,width,20)
}
}