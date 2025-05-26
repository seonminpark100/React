import React,{useEffect, useState} from "react";
import { Form, Link, useNavigate, useParams } from "react-router-dom";

function View(props) {
  console.log(props);
  let params = useParams();
  console.log("파라미터", params.idx);


  const navigate = useNavigate();

  let [boardData, setBoardData] = useState({});
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "apikey=0dda47d62e11745fe3e92dbc380ddbd4&tname=nboard_news&idx="+params.idx;

  useEffect(function() {
    fetch(requestUrl + "?" + parameter)
    .then((result)=>{
      return result.json();
    })
    .then((json)=>{
      console.log(json);
      setBoardData(json);
    });
    return()=>{
      console.log('useEffect실행==>컴포넌트 언마운트');
    }
  },[]);

  return(<>
      <header>
      <h2>게시판-읽기</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>&nbsp;
      <Link to={"/edit/" + params.idx} >수정</Link>&nbsp;
      <Link onClick={()=>{
        if (condition) {
        console.log('삭제 idx', params.idx);
        fetch("http://nakja.co.kr/APIs/php7/boardDeleteJSON.php", { method: 'POST',
          header:{
            'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
          },body: new URLSearchParams({
            apikey : '0dda47d62e11745fe3e92dbc380ddbd4',
            tname: 'nboard_news',
            idx : params.idx,
          }),
      })
      .then((response)=> {
        return response.json();
        })
      .then((json))=>{
        console.log(json);
        if (json.result==='successs'){
          alert('삭제되었습니다.');
          navigate('/list');
        }
        else{
          alert('삭제의 실패했습니다.');
        }
        });
>삭제</Link>
    </nav>
    <article>
        <table id="boardTable">
          <colgroup>
            <col width="20%" /><col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>작성자</th>
              <td>{boardData.name}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>{boardData.subject}</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>{boardData.regdate}</td>
            </tr>
            <tr>
              <th>내용</th>
              <td dangerouslySetInnerHTML={{__html: boardData.content}}></td>
            </tr>
          </tbody>
        </table>
    </article>
  </>);
}
export default View;