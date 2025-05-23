import React from "react";

const Board = (props) => {
  console.log(props);
  return (<>
    <h2>읽기 (Read)댓글 기능 구현</h2>
    <form name="writeFrm">
      <input type="hidden" name="num" value="1" />
      <tbody>
        
    <table id="boardTable">
      
        <tr>
          <th>번호</th>
          <td>100</td>
          <th>작성자</th>
          <td>낙짜쌤</td>
        </tr>
        <tr>
          <th>작성일</th>
          <td>2025.05.22</td>
          <th>조회수</th>
          <td>99</td>
        </tr>
        <tr>
          <th>제목</th>
          <td colSpan="3" className="subject">댓글 구현을 위한 스킨</td>
        </tr>
        <tr> 
          <th>내용</th>
          <td colSpan="3" className="subject">
            읽기 부분은 구현하지 않습니다. <br/>
            아래 댓글 부분을 구현하면 됩니다. 
          </td>            
        </tr>
        <tr>
          <td colSpan="4" align="center">
            <button type="button" onClick={()=>{}}>목록가기</button>
            <button type="button" onClick={()=>{}}>삭제하기</button>
            <button type="button" onClick={()=>{}}>리스트로</button>
          </td>
        </tr>
       </table>    
      </tbody>
       
    </form>
  </>);
}

export default Board;  
