# 간단한 일기장 프로젝트 - 한입 크기로 잘라 먹는 리액트
## 나만의 기능 - 이모지 삽입
![](https://velog.velcdn.com/images/alswl2487/post/b97ab449-ed05-402c-b385-152b4221ea58/image.png)
위 사진에 있는 이모티콘을 클릭하면 이모티콘 선택 영역이 보여진다.

![](https://velog.velcdn.com/images/alswl2487/post/301f34d3-8c37-4700-8223-5c8397b0d474/image.png)
이모티콘을 선택하면 자동으로 일기장에 이모티콘이 추가됩니다.

![](https://velog.velcdn.com/images/alswl2487/post/8b80b2b5-2359-4962-b7d4-69a7815c8aa1/image.png)

```python 
// DiaryEditor에서 해당 부분만 발췌
  // component 함수 내부
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
  
  // return 내부
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
```
