import "./Home.css"

const Home = (props) => {
  return (
    <span className='headerHomeText'>{props.title} {props.textCome} {props.showMyEvent}</span>
  )
}

export default Home;