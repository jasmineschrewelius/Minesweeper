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
      ClickedCells : 0,
    }
    
    this.showCell=this.showCell.bind(this)  // set state for showcell bind here
  } 
 
  showCell(index){  // to show the cell
    let newGameboard = [...this.state.GameBoard] // copy the old array
    newGameboard[index].visible=!newGameboard[index].visible // show cell
    this.setState({GameBoard:newGameboard}) // use setState to set state
    this.state.ClickedCells++ // add to clickedcells

    console.log(this.state.ClickedCells);
    console.log(this.state.Goal);

    

    if(this.state.GameBoard[index].hasMine){ // if it is a mine
      console.log('YOU LOST');
      return(
        <div className='youfailed'>
        {'You lost!'}
        </div>
      )}
    if(this.state.ClickedCells === 18){
      console.log('YOU WON')
      return(
        <div className='youWon'>
         {'You Won!'}
        </div>
      )
    }
    }

  render() {



  return (
    <div className='board'>
      {this.state.GameBoard.map((cell, index) => {
        return (
         <Cell className="cell" cell={cell} key={index} onClick={(index)=>{this.showCell(index)}} />
        )
      })
      }
    </div>
    );
  }
}

export default Board;