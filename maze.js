class Maze {

    #width;
    #height;
    #cells;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
        this.#cells = [];
        console.log("generating a maze ", width, " by ", height);
    }

    #writeCell(x, y, data) {

    }

    getWidth() {
        return this.#width;
    }
    getHeight() {
        return this.#height;
    }

}

function generateMaze() {
    let width = $('input#width').val();
    let height = $('input#height').val();
    const maze = new Maze(width, height);
}
