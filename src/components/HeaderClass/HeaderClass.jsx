import { Component } from 'react'

class HeaderClass extends Component {
    render() {
      console.log(this.props.home)
    return (
      <span className='headerClassText'>{this.props.home}, {this.props.aboutme}, {this.props.show}</span>
    )
  }
}

export default HeaderClass
