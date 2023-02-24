import React from "react";
import './Cell.css';


function Cell(props) {

  
  let clickedCell= function() { // create clicked function using props


   props.onClick(props.cell.index)
   
  }

    if(props.cell.visible){
      return(
        <div className="homecell">
          {props.cell.hasMine && (
            <div className="showcell">
             BOMB
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
