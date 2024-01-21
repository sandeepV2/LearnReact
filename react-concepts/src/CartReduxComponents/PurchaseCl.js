import  { Component } from 'react'
import { connect } from 'react-redux'


class PurchaseCl extends Component {

  render() {
    return (
        <div className='customDiv'>
        <h6>Purchase Products (Class)</h6>
        <hr/>
        <select onChange={this.props.purchaseHandler}>
            {this.props.products.map((prod, idx) => <option key= {idx} value={prod.price} >{prod.pname}</option>)}
        </select>
        {/* <h3>Selected option: {opt}</h3> */}
      </div>
    )
  }
}

const actionCreator = (e) => {
    let pname = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let prodObj = {pname, price};
    return {
        type : 'purchase',
        payLoad: prodObj
    }
}

const mapStateToProps = (state) => {
    return {products : state.prodR.products}
}

const mapDispatchToProps = dispatch => {
    return {
        purchaseHandler: (e) => dispatch(actionCreator(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseCl);