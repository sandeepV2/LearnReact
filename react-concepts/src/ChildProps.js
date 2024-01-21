import React from 'react'

const ChildProps = () => {
  return (
    <div>
      <ChildComp value="false">Hello World</ChildComp>
    </div>
  )
}

const ChildComp = (props) => {
    return (
      <div>
        <h1>Value : {props.value.toString()}</h1>
        {props.children}
      </div>
    )
  }

export default ChildProps
