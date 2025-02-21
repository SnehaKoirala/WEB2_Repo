class Circle{
    #center
    #radius

    constructor(center,radius){
        this.#center = center
        this.#radius = radius
    }

    getcenterX(){
        return this.#center.getX()
    }
    getCenterY(){
        return this.#center.getY()

    }

    getRadius(){
        return this.#radius
    } 
    moveCenterTo(x,y){
        this.#center.moveTo(x,y)
    } 
    toString(){
        return `Circle(Center: ${this.#center.toString()}, Radius: ${this.#radius})`
    }
}    

class point{
    #x
    #y

    constructor(x,y){
        this.#x = x
        this.#y = y
    }

    getX(){
        return this.#x
    }
    getY(){
        return this.#y
    }
    moveTo(newX,newY){
        this.#x = newX
        this.#y = newY
    }
    toString(){
        return `[${this.#x},${this.#y}]`
    }
}
console.log(new Circle(new point(1,2),3).toString())




