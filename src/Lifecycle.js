import React, {useEffect, useState} from "react";

const UnmountTest = () => {

  useEffect(() => {
    console.log("Mount")

    return () => {
      //UnMount 되는 시점에 실행
      console.log("Unmount!!")
    }
  }, [])

  return <div>Unmount testing component</div>
}


const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => {
    setIsVisible(!isVisible)
  }


  return (
    <div style={{padding:20}}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>} 
    </div>
  )
}

export default Lifecycle