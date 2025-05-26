import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit(props) {
  console.log(props);
  const navigate = useNavigate();

  let params = useParams();
  console.log("수정idx", params.idx);

  let requestUrl = "http://nakja.co.kr/APIs/php7/boardEditJSON.php"
  let parameter = "apikey=0dda47d62e11745fe3e92dbc380ddbd4&tname=nboard_news&idx=" + params.idx;

  const[Writer, setWriter] = useState('');
  const[Title, setTitle] = useState('');
  const[Contents, setContents] = useState('');

  useEffect(function() {
    fetch(requestUrl + "?" + parameter)
    .then((result)=>{
      return result.json();
    })
    .then((json)=>{
      console.log(json)
      setWriter(json.name);
      setTitle(json.subject);
      setContents(json);    
    });
    return ()=>{
      console.log('useEffect실행 ==> 컴포넌트 언마운트');
    }
  }, []);

  return(<>
      <header>
      <h2>게시판-수정</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
      <form onSubmit={
        (event)=>{
          event.preventDefault();

          let i = event.target.idx.value;
          let w = event.target.writer.value;
          let t = event.target.title.value;
          let c = event.target.contents.value;
          console.log(w,t,c);


          fetch('http://nakja.co.kr/APIs/php7/boardEditJSON.php',{
            method: 'POST',
            header:{
              'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: new URLSearchParams({
              apikey : '0dda47d62e11745fe3e92dbc380ddbd4',
              tname: 'nboard_news',
              id: 'jsonAPI',
              name: w,
              subject: t,
              content: c,
              idx : i,
            }),
          })
          .then((response)=> response.json())
          .then((json)=> console.log(json))

          navigate("/list")
        }
      }>
        <input type="hidden" name="idx" value={params.idx}/>
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th>
              <td><input type="text" name="writer" /></td>
            </tr>
            <tr>
              <th>제목</th>
              <td><input type="text" name="title" /></td>
            </tr>
            <tr>
              <th>내용</th>
              <td><textarea name="contents" cols="22" rows="3" ></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
  </>);
}

export default Edit;