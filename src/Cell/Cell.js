import React, { useState } from "react";
import './Cell.css';


function Cell(props) {

 
  
  let clickedCell= function() { // create clicked function using props

    console.log(props.cell.hasMine)   // show if it has a mine or not
    console.log(props.cell.numberOfNeighbouringMines) // show neighboring mines
    console.log(props.cell.index)// show cell index

   props.onClick(props.cell.index)
   
  }

    if(props.cell.visible){
      return(
        <div className="homecell">
          {props.cell.hasMine && (
            <div className="showcell">
              Bomb
            </div>  
          )}
          {!props.cell.hasMine && props.cell.numberOfNeighbouringMines !==0 && (
            <div className="showcell">
              {props.cell.numberOfNeighbouringMines}
            </div>  
          )}
          {!props.cell.hasMine && props.cell.numberOfNeighbouringMines ===0 && (
            <div className="showcell">
              {props.cell.numberOfNeighbouringMines}
            </div>  
          )}
        </div>
      )
     }
     else {
      return(
      <>
      <div className="showcell" onClick={clickedCell}>
      </div>
      </>
     )}    
  }

export default Cell;
