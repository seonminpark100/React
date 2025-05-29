import { deleteObject, listAll, ref } from 'firebase/storage';
import './App.css'
import { storage } from './storageConfig';
import { useEffect, useState } from 'react';

function App() {

  const listRef = ref(storage, '');

  const [FileList, setFileLists] = useState([]);
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(()=>{
    let fileRodws = [];
    listAll(listRef).then((res)=>{
      res.prefixes.forEach((folderRef)=>{
        console.log('폴더', folderRef);
      });
      res.items.forEach((itemRef)=>{
        console.log('파일명',itemRef.name);
        const deleteRef = ref(storage, itemRef.fullPath);

        fileRodws.push(
          <tr key={itemRef.name}>
            <td>{itemRef.bucket}</td>
            <td>{itemRef.fullPath}</td>
            <td>{itemRef.name}</td>
            <td><button type='button' onClick={(e)=>{
              if (window.confirm('삭제할까요?')) {
                deleteObject(deleteRef).then(()=>{
                  console.log("파일 삭제 성공");
                  setRenderFlag(!renderFlag);
                })
                .catch((error)=>{
                  console.log("파일 삭제 실패");
                });
              }
            }}>삭제</button></td>
          </tr>
        );
      });
      setFileLists(fileRodws);
    })
    .catch((error)=>{
      console.log('에러발생', error);
    });
  }, [renderFlag]);

  
  return (
      <div className='App'>
      <h2>firebase - storage APP</h2>
      <h3>파일 목록 및 삭제</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>bucket</th>
            <th>fullPath</th>
            <th>name</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {FileList}
        </tbody>
      </table>
	    </div>
  );
}

export default App
