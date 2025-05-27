import './App.css'
import { firestore } from './firestoreConfig';
import{ doc, setDoc, getDoc} from "firebase/firestore";

function App() {
    console.log("firestore", firestore);

    const addMessage = async()=>{
      await setDoc(doc(firestore, "Korea", "Seoul"), {
        gu:"은평구",
        dong:"진관동",
        hotplace:"연신내",
      });
      console.log("입력성공")
    }
    const getMessage = async()=>{
      const docRef = doc(firestore, "Korea", "Seoul");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      }
      else{
        console.log("No such document!")
      }
    }

  return (
      <div className='App'>
      <h2>Firebase - Firestore 연동 App</h2>
      <h3>Firebase 연결</h3>
      <input type="button" value='입력' onClick={addMessage} />
      <input type="button" value='읽기' onClick={getMessage} />
	    </div>
  );
}

export default App
