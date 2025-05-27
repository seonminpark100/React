import React from "react";

export default function Stats(props) {
  //플레이어수 : 객체형 배열의 크기를 통해 얻어옴 
  let playersCount = props.playerData.length;

  //점수의 총합. prev의 초기값은 0으로 설정 후 curr의 점수를 누적해서 더해줌.
  let totalPoint = props.playerData.reduce((prev, curr) =>{
    console.log(curr.name + '점수', curr.score);
    prev += curr.score;
    return prev;
  }, 0);

  //위에서 계산한 값을 UI에 적용 
  return (<>
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{playersCount}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoint}</td>
      </tr>
      </tbody>
    </table>    
  </>);
}