import { getDownloadURL, listAll, ref } from 'firebase/storage';
import './App.css'
import { storage } from './storageConfig';
import { useEffect, useState } from 'react';

function App() {

  const listRef = ref(storage, '');

  const [FileList, setFileLists] = useState([]);
  console.log('렌더링');

  useEffect(()=>{
    let fileRodws = [];
    listAll(listRef).then((res)=>{
      res.prefixes.forEach((folderRef)=>{
        console.log('폴더', folderRef);
      });
      res.items.forEach((itemRef)=>{
        console.log('파일명',itemRef.name);

        getDownloadURL(ref(storage, itemRef.name))
        .then((url)=>{
          console.log('파일 URL 다운로드');
          const img = document.getElementById(`img_${itemRef.name}`);
          img.setAttribute('src', url);
          img.setAttribute('width', '200');
        })
        .catch((error)=>{
          console.log("이미지 다운로드 중 에러", error)
        });
        fileRodws.push(
          <tr key={itemRef.name}>
            <td>{itemRef.bucket}</td>
            <td>{itemRef.fullPath}</td>
            <td>{itemRef.name}</td>
            <td><img id={`img_${itemRef.name}`} alt='' /></td>
          </tr>
        );
      });
      setFileLists(fileRodws);
    })
    .catch((error)=>{
      console.log('파일 목록 출력중 에러발생', error);
    });
  }, []);

  
  return (
      <div className='App'>
      <h2>firebase - storage APP</h2>
      <h3>파일 목록 및 이미지 다운로드</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>bucket</th>
            <th>fullPath</th>
            <th>name</th>
            <th>이미지</th>
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
