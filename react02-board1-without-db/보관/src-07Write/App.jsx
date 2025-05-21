import { useState } from 'react';
import './App.css'
import NaviList from './components/navigation/NavList';
import NavView from './components/navigation/NavView';
import Naviwrite from './components/navigation/NavWrite';
import ArticleList from './components/article/ArticleList';
import ArticleView from './components/article/ArticleView';
import Articlewrite from './components/article/ArticleWrite';

function ReadyComp() {
  return(
    <div>
      <h3>컴포넌트 준비중입니다.</h3>
      <a href="/">Home바로가기</a>
    </div>
  );
}

function Header(props) {
  console.log('props', props.title)
  return(
  <header>
    <h2>{props.title}</h2>
  </header>
  );
}


function App() {
  const [boardData, setBoardData] = useState  ([
    {no:1, title:'오늘은 공부하는날', writer:'홍길동', date:'2025-03-31'},
    {no:2, title:'어제는 자바스크립트공부', writer:'카리나', date:'2025-05-21', contents:'카리나는 이뿌'},
    {no:3, title:'내일도 카리나 ', writer:'선민이', date:'2025-07-21', contents:'카리나는 섹시미녀'},
  
  ]);
  const[mode, setMode] = useState('list');

  const [no, setNo] = useState(null);
  const [nextNo, setNextNo] = useState(4);

  let articleComp, navComp, titleVar, selectRow;
  if (mode==='list') {
    titleVar = '게시판-목록(props)';
    navComp = <NaviList onChangeMode={()=>{
      setMode('write');
    }}></NaviList>
    articleComp = <ArticleList boardData={boardData}
    onChangeMode={(no)=>{
      console.log('선택한 게시물 번호' + no);
      setMode('view');
      setNo(no);
    }}></ArticleList>
  }
  else if(mode==='view'){
    titleVar = '게시판-읽기(props)';
    navComp = <NavView onChangeMode={(pmod)=>{
      setMode(pmod);
    }}></NavView>

    console.log("현재no:", no, typeof(no));
    for (let i = 0; i < boardData.length; i++) {
      if (no === boardData[i].no) {
        selectRow = boardData[i];
      }
    }
    articleComp = <ArticleView selectRow={selectRow}></ArticleView>
  }
  else if(mode==='write'){
    titleVar = '게시판-쓰기(props)';
    navComp = <Naviwrite onChangeMode={()=>{
      setMode('list');
    }}></Naviwrite>
    articleComp = <Articlewrite writeAction={(t,w,c)=>{
      console.log("App.jsx", t,w,c);

      let dataObj = new Date();
      var year = dataObj.getFullYear();
      var month = ("0"+ (1 + dataObj.getMonth())).slice(-2);
      var day = ("0" + dataObj.getDate()).slice(-2);
      let nowDate = year + "-" + month + "-" + day;

      let addBoardData = {no:nextNo, title:t, writer:w, contents:c, date:nowDate};

      let copyBoardData = [...boardData];
      copyBoardData.push(addBoardData);
      setBoardData(copyBoardData);

      setNextNo(nextNo + 1);
      setMode('list');
    }}></Articlewrite>
  }
  else{
    navComp = <ReadyComp></ReadyComp>;
    articleComp='';
  }
  return (
      <div className='App'>
        <Header title={titleVar}></Header>
        {navComp}
        {articleComp}
	</div>
  );
}

export default App