class Game{
    constructor(ctx, cells, cellSize){
        this.ctx = ctx;
		this.cells = cells;
        this.cellSize = cellSize;
        this.isRunning = false;
        this.snake = new Snake({x: 10, y: 1});
    }
    start(){
        this.isRunning = true;
        this.run();
    }
    run(){

    }
}