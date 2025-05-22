import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';



const TopNavi = ()=>{
  return(
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/intro">인트로</NavLink>&nbsp;
      <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
      <NavLink to="/xyz">잘못된URL</NavLink>&nbsp;
    </nav>
  );
}

const CommonLayout =() =>{
  return(
    <div>
      <header style={{background: 'lightgrey', padding:'10px'}}>
      Outlet 컴포넌트 알아보기
      </header>
      <article>
        <Outlet />
      </article>
      <footer style={{background: 'lightgrey', padding: '10px'}}>
        공통 레이아웃
      </footer>
    </div>
  );
}

const Home = () =>{
  return(
    <>
    <h2>React Home</h2>
      <p>
      React Router에 대한 학습.
      </p>
    </>
  );
}

const LayoutIndex = ()=> {
  return(
    <>
    <h2>레이아웃 인덱스 페이지</h2>
      <ul>
        <li>Outlet 컴포넌트 위치에 출력됩니다.</li>
        <li>Route 설정시 index로 지정합니다.</li>
      </ul>
    </>
  );
}

const RouterHook = ()=>{
  return(
    <>
    <h2>라우터 관련 Hook</h2>
    </>
  );
}

const NotFound = ()=>{
  return(
    <div>
       <h2>Not Found</h2>
        <p>
          페이지를 찾을 수 없습니다.<br />
          <Link to='/'>Home</Link>
        </p>
    </div>
  );
}

function App() {
  
  return (
      <div className='App'>
      <TopNavi></TopNavi>
       <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/intro' element={<CommonLayout />} >
        <Route index element={<LayoutIndex />} />
        <Route path='router' element={<RouterHook />} />
        </Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes> 
	</div>
  );
}

export default App;