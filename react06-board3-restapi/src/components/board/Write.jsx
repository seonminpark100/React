import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Write(props) {
  console.log(props);
  const navigate = useNavigate();

  return(<>
      <header>
      <h2>게시판-작성</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
      <form onSubmit={
        (event)=>{
          event.preventDefault();

          let w = event.target.writer.value;
          let t = event.target.title.value;
          let c = event.target.contents.value;
          console.log(w,t,c);

          fetch('http://nakja.co.kr/APIs/php7/boardWriteJSON.php',{
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
            }),
          })
          .then((response)=> response.json())
          .then((json)=> console.log(json))

          navigate("/list")
        }
      }>
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

export default Write;