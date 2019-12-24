class Game{
    constructor(ctx, cells, cellSize){
        this.ctx = ctx;
		this.cells = cells;
        this.cellSize = cellSize;
        this.isRunning = false;
        this.gamespeed = 10;
        this.snake = new Snake({x: 10, y: 1});
        this.snakeColor = '#101010';
    }
    start(){
        this.isRunning = true;
        this.run();
    }
    run(){
        setTimeout(() => {
            this.ctx.clearRect(0, 0, this.cells * cellSize, this.cells * cellSize);
            this.draw(this.snake.head, this.snakeColor);
            this.snake.update();
            requestAnimationFrame(() => this.run());
        }, 1000/this.gamespeed);
    }
    draw(position, color){
        this.ctx.fillStyle = color;
		this.ctx.fillRect(position.x * this.cellSize, position.y * this.cellSize, this.cellSize, this.cellSize);
    }
}