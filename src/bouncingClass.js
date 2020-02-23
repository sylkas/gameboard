
module.exports = class Bouncing{
    constructor(startX, startY, board){
        this.startX = startX;
        this.startY = startY;
        this.currX = startX;
        this.currY = startY;
        this.board = board;
        this.vectorX = 1;
        this.vectorY = 1;
    }

    show(){   
        const b = this.board;
        for (let i =0; i< b.length; i++){
            let line = '';
            for(let j=0; j < b[i].length; j++){
                line += ' ' +b[i][j];
            }
            console.log(line);           
        }
    }
    getBoard(){
        return this.board;
    }

    getBoardDimension(){
        return {
            borderX: this.board.length - 1,
            borderY: this.board[0].length - 1
        }
    }

    nextStep1(){
        const tempX = this.startX + this.vectorX;
        const tempY = this.startY + this.vectorY;
        if (this.board[tempX][tempY] === 'X') console.log( tempX, tempY, "change direction");
        else console.log( tempX, tempY, "same direction");
    }

    changeBoard(x, y){
        this.board[x][y] = 1;
        this.board[this.currX][this.currY] = 0;
    }

    nextStep(){
        const { borderX, borderY } = this.getBoardDimension();
        let tempX = this.currX + this.vectorX;
        let tempY = this.currY + this.vectorY;
        if (this.board[tempX][tempY] === 'X'){
            //console.log( tempX, tempY, "change direction");
            if(tempX === 0 || tempX === borderX){
              this.vectorX = -(this.vectorX);
            };
            if(tempY === 0 || tempY === borderY){
                this.vectorY = -(this.vectorY);
            };
            tempX = this.currX + this.vectorX;
            tempY = this.currY + this.vectorY;
            //console.log( tempX, tempY, "change");
        }
        this.changeBoard(tempX, tempY);
        //this.changeBoard(0, 2);
        this.currX = tempX;
        this.currY = tempY;
        return this.board;  
    }

    isNotEnd(){
        if(this.startX === this.currX && this.startY === this.currY){
            return false;
        } else {
            return true;
        }
    }
    showCoor(){
        return {currx:this.currX, curry: this.currY};
    }
    isrun(){
        return 'dziala';
    }
    run(){
        this.nextStep();
        //let isNotEnd = 56;
        while(this.isNotEnd()){
            this.nextStep();
           // this.show();
            //this.showCoor();
            //console.log("not end");
            //isNotEnd--;
            //console.log(this.isNotEnd());
        }
        //console.log("end")
    }

}


