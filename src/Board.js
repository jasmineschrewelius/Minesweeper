import './Board.css';
import React from "react";
import createBoard from './utilis';
import Cell from './Cell/Cell';

class Board extends React.Component {
  
  constructor(props) {
    super(props);
    let mines= 7      // give value to mines
    let board= 25      // give value to board

    this.state ={
      GameBoard : createBoard(board, mines), 
      Goal : (board - mines),
      Failed : false,
      Finished : false,
      ClickedCells : 0,
    }
    
    this.showCell=this.showCell.bind(this)  // set state for showcell bind here
  } 
 
  showCell(index){  // to show the cell
    let newGameboard = [...this.state.GameBoard] // copy the old array
    newGameboard[index].visible=!newGameboard[index].visible // show cell
    this.setState({GameBoard:newGameboard}) // use setState to set state
    

    console.log(this.state.ClickedCells);
    console.log(this.state.Goal);

    if(this.state.GameBoard[index].hasMine){ // if it is a mine
      console.log('YOU LOST');
        this.setState({Failed:true})   // change state to true
      }

    if(this.state.ClickedCells === this.state.Goal){
      console.log('YOU WON')
      this.setState({Finished:true})   // change state to true
    }
    else {
      this.state.ClickedCells++ // add to clickedcells
    }
    }

  render() {
    const finished = this.state.Finished;
    const failed = this.state.Failed;
    let printout;
    if(finished) {
     printout = <div id="youWon" className='results'><p>YOU WON!</p></div>;
    }
    if(failed) {
     printout = <div id="youLost" className='results'><p>YOU LOST!</p></div>;
    }


  return (
    <div className='board'>
      {this.state.GameBoard.map((cell, index) => {
        return (
         <Cell className="cell" cell={cell} key={index} onClick={(index)=>{this.showCell(index)}} />
        )
      })
      }
      {printout}
    </div>
    );
  }
}

export default Board;