import { useState } from 'react';
import './App.css'
import NaviList from './components/navigation/NavList';
import NavView from './components/navigation/NavView';
import Naviwrite from './components/navigation/NavWrite';
import ArticleList from './components/ArticleList';
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
  const boardData = [
    {no:1, title:'오늘은 공부하는날', write:'홍길동', date:'2025-03-31'},
    {no:2, title:'어제는 자바스크립트공부', write:'카리나', date:'2025-05-21', contents:'카리나는 이뿌'},
    {no:3, title:'내일도 카리나 사랑해', write:'선민이', date:'2025-07-21', contents:'카리나는 섹시미녀'},
    {no:4, title:'추가 윈터', write:'윈터', date:'2025-07-21', contents:'윈터도 섹시미녀'},
  ];
  const[mode, setMode] = useState('list');
  let articleComp, navComp, titleVar;
  if (mode==='list') {
    titleVar = '게시판-목록(props)';
    navComp = <NaviList onChangeMode={()=>{
      setMode('write');
    }}></NaviList>
    articleComp = <ArticleList boardData={boardData}
    onChangeMode={(no)=>{
      console.log('선택한 게시물 번호' + no);
      setMode('view');
    }}></ArticleList>
  }
  else if(mode==='view'){
    titleVar = '게시판-읽기(props)';
    navComp = <NavView onChangeMode={(pmod)=>{
      setMode(pmod);
    }}></NavView>
    articleComp = <ArticleView></ArticleView>
  }
  else if(mode==='write'){
    titleVar = '게시판-쓰기(props)';
    navComp = <Naviwrite onChangeMode={()=>{
      setMode('list');
    }}></Naviwrite>
    articleComp = <Articlewrite></Articlewrite>
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