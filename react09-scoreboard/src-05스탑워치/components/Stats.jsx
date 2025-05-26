import React from "react";

export default function Stats(props) {
  console.log(props);

  let playerCount = props.playerData.length;

  let totalPoint = props.playerData.reduce((prev, curr)=>{
    console.log(curr.name +'점수', curr.score);
    prev += curr.score;
    return prev;
  },0);

  return (<>
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{playerCount}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoint}</td>
      </tr>
      </tbody>
    </table>    
  </>);
}