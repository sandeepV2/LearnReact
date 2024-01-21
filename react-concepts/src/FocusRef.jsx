import React, {Component} from 'react'

// set focus on the element for input fields
class FocuRef extends Component {
  constructor(props) {
    super(props);
    this.iElement = React.createRef();
  }

  componentDidMount() {
    this.iElement.current.focus();
  }
  render() {
  return (
    <div>
      <input type="text"/>
      <hr />
      <input type="text" ref={this.iElement}></input>
      <button type="submit" onClick={() =>this.iElement.current.focus()}>set-focus</button>
    </div>
  )
}
}

export default FocuRef;
