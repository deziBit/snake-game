class Game{
    constructor(ctx, cells, cellSize){
        this.ctx = ctx;
		this.cells = cells;
        this.cellSize = cellSize;
        this.gamespeed = 10;
        this.snakeColor = '#101010';
        this.mouseColor = '#D3D3D3';
        this.snake = new Snake({x: 10, y: 1});
        this.mouse = undefined;
        this.newMouse();
    }
    run(){
        if(!this.detectCollision()){
            setTimeout(() => {
                this.ctx.clearRect(0, 0, this.cells * cellSize, this.cells * cellSize);
                this.draw(this.snake.head, this.snakeColor);
                this.snake.body.forEach(part => this.draw(part, this.snakeColor));
                this.draw(this.mouse, this.mouseColor);
                this.snake.update();
                requestAnimationFrame(() => this.run());
            }, 1000/this.gamespeed);
        }
        else{
            console.log('GAME OVER!');
        }
    }
    draw(position, color){
        this.ctx.fillStyle = color;
		this.ctx.fillRect(position.x * this.cellSize, position.y * this.cellSize, this.cellSize, this.cellSize);
    }
    detectCollision(){
        // Collision with wall
        if(this.snake.head.x >= this.cells || 
            this.snake.head.x < 0 ||
            this.snake.head.y >= this.cells ||
            this.snake.head.y < 0)
                return true;
        // Collision with self
        if(this.snake.body.some(part => part.x == this.snake.head.x && part.y == this.snake.head.y))
            return true;
        // Collision with mouse
        if(this.snake.head.x == this.mouse.x && this.snake.head.y == this.mouse.y){
            this.snake.eat(this.mouse);
            this.newMouse();
        }
        return false;
    }
    newMouse(){
        this.mouse = {x: Math.floor(Math.random() * this.cells), y: Math.floor(Math.random() * this.cells)};
    }
    keydownHandler(event){
		switch(event.keyCode){
			case 37:	// ArrowLeft
			case 38:	// ArrowUp
			case 39:	// ArrowRight
			case 40:	// ArrowDown
                this.snake.newDirection = event.key.substring(5).toLowerCase();
				break;
			default:
				break;
		}
	}
}