import './Board.css';
import React, { Component } from "react";
import createBoard from './utilis';
import Cell from './Cell/Cell';

class Board extends React.Component {
  
  constructor(props) {
    super(props);
    let mines= 7      // give value to mines
    let board= 25      // give value to board

    this.state ={
      GameBoard : createBoard(board, mines)  // set state
    }
    /*
    this.GameBoard = createBoard(board, mines) // create Gameboard by using createboard from 
    */
    this.showCell=this.showCell.bind(this)  // set state for showcell bind here
  } 
 
  showCell(index){  // to show the cell
    let newGameboard = [...this.state.GameBoard] // copy the old array
    newGameboard[index].visible=!newGameboard[index].visible // show cell
    this.setState({GameBoard:newGameboard}) // use setState to set state
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