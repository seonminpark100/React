import './App.css'

function Header(props) {
  console.log('props', props.title)
  return(
  <header>
    <h2>{props.title}</h2>
  </header>
  );
}
function Nav(props) {
  return(
  <nav>
    <a href="/">글쓰기</a>
  </nav>
  );
}
function Article(props) {
  const lists = [];
  for (let i = 0; i < props.boardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
      <td className='cen'>{row.no}</td>
      <td><a href={'/read/' + row.no}>{row.title}</a></td>
      <td className='cen'>{row.write}</td>
      <td className='cen'>{row.date}</td>
    </tr>
    );
  }
  return(
  <article>
    <table id='boardTable'>
    <thead>
      <tr>
    <th>No</th>
    <th>제목</th>
    <th>작성자</th>
    <th>날짜</th>
    </tr>
    </thead>
    <tbody>
      {lists}
    </tbody>
    </table>
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
  return (
      <div className='App'>
        <Header title="게시판 목록(props)"></Header>
        <Nav></Nav>
        <Article boardData={boardData}></Article>
	</div>
  );
}

export default App