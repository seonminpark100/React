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
function App() {
  
  return (
      <div className='App'>
      <TopNavi></TopNavi>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/intro' element={<CommonLayout />} >
        <Route index element={<RouterHook />} />
        <Route path='router' element={<RouterHook />} />
        </Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
	</div>
  );
}

export default App;