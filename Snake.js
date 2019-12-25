class Snake{
    constructor(position){
        this.head = position;
        this.body = [];
        this.direction = {val: 'right', vec: {x: 1, y: 0}};
        this.newDirection = undefined;
        this.mouse = undefined;
    }
    update(){
        if(this.newDirection){
            this.changeDirection();
            this.newDirection = undefined;
        }
        for(let i = this.body.length - 1; i > 0; i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        if(this.body.length != 0){
            this.body[0].x = this.head.x;
            this.body[0].y = this.head.y;
        }
        if(this.mouse){
            this.body.unshift(this.mouse);
            this.mouse = undefined;
        }
        this.head.x += this.direction.vec.x;
		this.head.y += this.direction.vec.y;
    }
    changeDirection(){
        switch(this.newDirection){
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
    eat(mouse){
        this.mouse = mouse;
    }
}