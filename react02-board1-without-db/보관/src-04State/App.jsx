import { useState } from 'react';
import './App.css'

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
function NaviList(props) {
  return(
    <nav>
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}>글쓰기</a>
    </nav>
  );
}
function NavView(props) {
  return(
  <nav>
    <a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangeMode('list');
    }}>목록</a>&nbsp;
    <a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangeMode('edit');
    }}>수정</a>&nbsp;
    <a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangeMode('delete');
    }}>삭제</a>
  </nav>
  );
}

function Naviwrite(props) {
  return(
    <nav>
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}>목록</a>
    </nav>
  );
}

function ArticleList(props) {
  const lists =[];
  for (let i = 0; i < props.boardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
        <td className='cen'>{row.no}</td>
        <td><a href={'/read/'+row.no} onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(row.no);
        }}>{row.title}</a></td>
        <td className='cen'>{row.write}</td>
        <td className='cen'>{row.date}</td>
      </tr>
    );
    
  }
 return(
  <article>
  <table id="boardTable">
    <colgroup>
      <col width="30%" /><col width="*" />
    </colgroup>
    <tbody>
      <tr>
        <th>작성자</th>
        <td>성유겸</td>
      </tr>
      <tr>
        <th>제목</th>
        <td>오늘은 React공부하는날</td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>2025-05-20</td>
      </tr>
      <tr>
        <th>내용</th>
        <td>열심히 해봅시다<br />열공 합시다</td>
      </tr>
    </tbody>
  </table>
</article>
  );
  }
function ArticleView(props) {
  return(

  <article>
      <form>
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th>
              <td><input type="text" name="write" /></td>
            </tr>
            <tr>
              <th>제목</th>
              <td><input type="text" name="title" /></td>
            </tr>
            <tr>
              <th>내용</th>
              <td><textarea name="content" cols="22" rows="3" ></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
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