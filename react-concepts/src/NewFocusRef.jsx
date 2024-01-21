import React, {useRef} from 'react'

const NewFocusRef = () => {
    const iEle = useRef(null)
  return (
    <div>
      <input type="text"></input>
      <br />
      <input type="text" ref={iEle}/>
      <button type="button" onClick={() => iEle.current.focus()}>set-focus-new</button>
    </div>
  )
}

export default NewFocusRef
