import './App.css'
import { useState } from 'react';
import { collection,  getDocs } from 'firebase/firestore';
import { firestore } from './firestoreConfig';

function App() {
  
  const[showData, setShowData] = useState([]);

  const getCollection = async ()=>{
    let trArray = [];
    const querySnapshot = await getDocs(collection(firestore, "members"));
    querySnapshot.forEach((doc) =>{
      let memberInfo = doc.data();
      trArray.push(
        <tr key={doc.id}>
          <td className='cen'>{doc.id}</td>
          <td className='cen'>{memberInfo.pass}</td>
          <td className='cen'>{memberInfo.name}</td>
          <td className='cen'>{memberInfo.regdate}</td>
        </tr>
      );
    });
    setShowData(trArray);
  }
  
  return (
      <div className='App'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <h2>Firebase - Firestore 연동 App</h2>
      <h3>전체조회하기</h3>
      <button type='button' onClick={getCollection}>전체조회</button>
      <table className='table table-bordered'>
        <thead>
          <tr className='text-center'>
            <th>아이디</th><th>비밀번호</th><th>이름</th><th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {showData}
        </tbody>
      </table>
	    </div>
  );
}

export default App
