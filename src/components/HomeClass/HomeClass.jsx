import { Component } from 'react'

class HomeClass extends Component {
    render() {
      console.log(this.props.title)
    return (
      <span className='homeClassText'>{this.props.title}, {this.props.textCome}, {this.props.showMyEvent}</span>
    )
  }
}

export default HomeClass

