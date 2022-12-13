import React, { useContext, useRef, useState } from "react"
import { DiaryDispatchContext } from "./App"


const DiaryEditor = () => {
  const {onCreate} = useContext(DiaryDispatchContext)

  const authorInput = useRef()
  const contentInput = useRef()
  
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  })

  const handleChangeState = (e) => {
    setState({
      ...state, // 이 부분이 항상 제일 위에 와야 한다. 이 부분이 아래로 가게 되면 새롭게 갱신해야 할 변수가 갱신이 되지 않기 때문이다. 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (state.author.length < 1){
      authorInput.current.focus()
      return
    }

    if (state.content.length <5){
      contentInput.current.focus()
      return
    }
    onCreate(state.author, state.content, state.emotion)
    alert("저장 성공")
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  }

  const [showEmoji, setShowEmoji] = useState(false)

  const chooseEmoji = (type) => {
    const emoji = {
      "1": "😀",
      "2": "😅",
      "3": "😂",
      "4": "🥰",
      "5": "😵",
      "6": "😤",
      "7": "😢",
      "8": "😱",
      "9": "😡",
    }
    setState({
      ...state,
      content: state.content + emoji[type]
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState}/>
      </div>
      <div>
        <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState}/>
      </div>
      <div>
        {/* 이모티콘 삽입하기 */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16" onClick={() => setShowEmoji(!showEmoji)}>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
        {showEmoji && <div style={{border: "solid 1px gray", width: 500, marginLeft: "auto", marginRight: "auto"}}>
            <span onClick={() => chooseEmoji("1")}>😀</span>
            <span onClick={() => chooseEmoji("2")}>😅</span>
            <span onClick={() => chooseEmoji("3")}>😂</span>
            <span onClick={() => chooseEmoji("4")}>🥰</span>
            <span onClick={() => chooseEmoji("5")}>😵</span>
            <span onClick={() => chooseEmoji("6")}>😤</span>
            <span onClick={() => chooseEmoji("7")}>😢</span>
            <span onClick={() => chooseEmoji("8")}>😱</span>
            <span onClick={() => chooseEmoji("9")}>😡</span>
          </div>}
      </div>
      <div style={{marginTop: 30}}>
        <span>오늘의 감정점수 : </span>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기저장하기</button>
      </div>
    </div>
  )
}

export default React.memo(DiaryEditor)