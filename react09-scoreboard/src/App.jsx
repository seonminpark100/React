import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import Player from './components/Player';

function App() {
  const [playerData, setPlayerData] = useState([
    {idx: 1, name: '홍길동', score: 10},
    {idx: 2, name: '손오공', score: 20},
    {idx: 3, name: '유비', score: 30},
    {idx: 4, name: '달타냥', score: 40},
  ]);

  const [nextVal , setNextVal] = useState(5);

  const addPlayerProcess = (pName)=>{
    console.log('onAddPlayer', pName);
    let addPlayer = {idx: nextVal, name: pName, score: 0};
    let copyPlayers = [...playerData];
    copyPlayers.push(addPlayer);
    setPlayerData(copyPlayers);
    setNextVal(nextVal+1);
  }

/*   playerData.push(addPlayer);
  setPlayerData(players);
  console.log(players); */
  const scoreChangeProcess = (flag, playerIdx) =>{
    // console.log('idx', playerIdx, 'flag', flag);
    let copyPlayers = [...playerData];
    copyPlayers.forEach((row)=>{
      if (row.idx === playerIdx) {
        // console.log(row.name);
        if (flag === '+'){
          row.score += 5;
        }
        else{
          row.score -= 5;
        }
        if (row.score<0) {
          alert('최소점수는 0점입니다.');
          row.score = 0;
        }
      }
    });
    setPlayerData(copyPlayers);
  }
  const deletePlayerProcess = (playerIdx)=>{
    console.log('삭제idx', playerIdx);

    let newPlayerData = playerData.reduce((prev, curr)=>{
      if (curr.idx !== playerIdx) {
        prev.push(curr);
      }
      return prev;
    }, []);
    console.log(newPlayerData);
    setPlayerData(newPlayerData);
  }
  const editPlayerProcess = (idx, name)=>{
    console.log('수정', idx, name);
    let newPlayersData = playerData.filter((row)=>{
      if (row.idx ===idx) {
        row.name = name;
      }
      return row;
    });
    setPlayerData(newPlayersData);
  }
  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" playerData={playerData}/>
      {
        playerData.map((playerRow) => (
          <Player playerData={playerRow} 
          key={playerRow.idx}
          onchangeScore={scoreChangeProcess}
          onDeletePlayer = {deletePlayerProcess}
          onEditplayer={editPlayerProcess}
          />
        ))  
      }
      <AddPlayerForm onAddPlayer={addPlayerProcess}></AddPlayerForm>
    </div>
  );
}

export default App;
