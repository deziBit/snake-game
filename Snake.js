class Snake{
    constructor(position){
        this.head = position;
        this.direction = {val: 'right', vec: {x: 1, y: 0}};
    }
    update(){
        this.head.x += this.direction.vec.x;
		this.head.y += this.direction.vec.y;
    }
}