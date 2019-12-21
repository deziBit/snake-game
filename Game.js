class Game{
    constructor(ctx, cells, cellSize){
        this.ctx = ctx;
		this.cells = cells;
        this.cellSize = cellSize;
        this.isRunning = false;
    }
    start(){
        this.isRunning = true;
        this.run();
    }
    run(){

    }
}