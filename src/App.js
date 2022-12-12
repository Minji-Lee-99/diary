import { useRef, useState, useEffect } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
// import Lifecycle from './Lifecycle'

// https://jsonplaceholder.typicode.com/comments


function App() {

  const [data, setData] = useState([])
  
  const dataId = useRef(0)

  const onCreate = (author, content, emotion) =>{
    const created_date = new Date().getTime()
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      created_date,
    }
    dataId.current += 1
    setData([newItem, ...data])
  }

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((ele) => {
      return ele.id !== targetId
    })
    setData(newDiaryList)
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((ele) => ele.id === targetId? {...ele, content: newContent} : ele)
    )
  } 

  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      console.log(res)
    
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        id: dataId.current++
      }
    })
    setData(initData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      {/* <Lifecycle/> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
