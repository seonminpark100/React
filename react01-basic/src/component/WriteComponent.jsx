import React from "react";

function WriteComponent(props) {
  return(
    <>
      <header>
      <h2>게시판-작성</h2>
    </header>
    <nav>
      <a href="/" onClick={(event)=>{
        event.preventDefault();
        props.changeMode('list');
      }}>목록</a>
    </nav>
    
    <article>
    <form>
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th>
              <td><input type="text" name="write"></input></td>
            </tr>
            <tr>
              <th>제목</th>
              <td><input type="text" name="title"></input></td>
            </tr>
            <tr>
              <th>내용</th>
              <td><textarea name="content" cols="22" rows="3" ></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송"></input>
      </form>
    </article>
    </>
  );
}
export default WriteComponent;