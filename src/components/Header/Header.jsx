import "./Header.css"

const Header = (props) => {
  return (
    <span className='headerText'>{props.home} | {props.aboutme} | {props.show}</span>
  )
}

export default Header;