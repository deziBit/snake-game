class Snake{
    constructor(position){
        this.head = position;
        this.direction = {val: 'right', vec: {x: 1, y: 0}};
    }
    update(){
        this.head.x += this.direction.vec.x;
		this.head.y += this.direction.vec.y;
    }
    changeDirection(newDirection){
        switch(newDirection){
			case 'left':
                if(this.direction.val != 'right')
                    this.direction = {val: 'left', vec: {x: -1, y: 0}};
				break;
			case 'up':
                if(this.direction.val != 'down')
                    this.direction = {val: 'up', vec: {x: 0, y: -1}};
				break;
			case 'right':
                if(this.direction.val != 'left')
                    this.direction = {val: 'right', vec: {x: 1, y: 0}};
				break;
			case 'down':
                if(this.direction.val != 'up')
                    this.direction = {val: 'down', vec: {x: 0, y: 1}};
				break;
			default:
				break;
		}
    }
}