import { useEffect, useState } from "react";
import { realtime } from "../realtimeConfig";
import Navi from "./Navi";
import { onValue, ref } from "firebase/database";

function Listener() {
  console.log("aa.realtime", realtime);
  const [fireData, setFireData] = useState([]);

  const dbRef = ref(realtime, 'users');
  useEffect(()=>{
    onValue(dbRef, (snapshot) =>{
      let showTr = [];
      snapshot.forEach((childSnapshot)=>{
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childKey, childData);
        showTr.push(
          <tr key={childKey}>
            <td>{childKey}</td>
            <td>{childData.name}</td>
            <td>{childData.pass}</td>
            <td>{childData.fireKey}</td>
          </tr>
        );
      });
      console.log('bb', showTr);
      setFireData(showTr);
    });
  },[]);
  console.log('cc');
  return(
    <div className="App">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <Navi />
      <h2>firebase - Realtime Database App</h2>
      <h3>Listener</h3>
      <table border={1} className="table table-bordered">
        <thead>
          <tr className="text-center">
              <th>아이디</th>
              <th>이름</th>
              <th>패스워드</th>
              <th>고유키</th>
          </tr>
        </thead>
        <tbody>
          {fireData}
        </tbody>
      </table>
    </div>
  )
}

export default Listener;