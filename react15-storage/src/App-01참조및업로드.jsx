import './App.css'
import {storage} from './storageConfig';
import {ref, uploadBytes} from "firebase/storage";

function App() {
  
  const storageRef = ref(storage);
  console.log('storageRef', storageRef);


  const imagesRef1 = ref(storage, 'images');
  const imagesRef2 = ref(storage, 'images/myFile.jpg');

  const imagesRef3 = imagesRef2.parent;
  const imagesRef4 = imagesRef2.root;

  console.log('ref객체', imagesRef1);
  console.log('경로1', imagesRef1.fullPath);
  console.log('경로2', imagesRef2.fullPath, imagesRef2.name);
  console.log('경로3', imagesRef3.fullPath);
  console.log('경로4', imagesRef4.fullPath);


  return (
      <div className='App'>
      <h2>firebase - storage App</h2>
      <h3>스토리지 접속 및 파일 업로드</h3>
      <p>파일을 선택하면 즉시 업로드 됩니다.</p>
      <input type="file" name='myFile' onChange={(e)=>{
       
        const imageRef = ref(storage, e.target.files[0].name);
        uploadBytes(imageRef, e.target.files[0]).then((snapshot)=>{
          console.log('업로드 성공', snapshot);
        });
      }} />
	    </div>
  );
}

export default App
