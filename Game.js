class Game{
    constructor(ctx, cells, cellSize){
        this.ctx = ctx;
		this.cells = cells;
        this.cellSize = cellSize;
        this.isRunning = false;
        this.snake = new Snake({x: 10, y: 1});
        this.snakeColor = '#101010';
    }
    start(){
        this.isRunning = true;
        this.run();
    }
    run(){
        this.draw(this.snake.head, this.snakeColor);
    }
    draw(position, color){
        this.ctx.fillStyle = color;
		this.ctx.fillRect(position.x * this.cellSize, position.y * this.cellSize, this.cellSize, this.cellSize);
    }
}