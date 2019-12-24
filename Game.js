class Game{
    constructor(ctx, cells, cellSize){
        this.ctx = ctx;
		this.cells = cells;
        this.cellSize = cellSize;
        this.gamespeed = 10;
        this.snake = new Snake({x: 10, y: 1});
        this.snakeColor = '#101010';
    }
    run(){
        if(!this.detectCollision()){
            setTimeout(() => {
                this.ctx.clearRect(0, 0, this.cells * cellSize, this.cells * cellSize);
                this.draw(this.snake.head, this.snakeColor);
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
        return false;
    }
}