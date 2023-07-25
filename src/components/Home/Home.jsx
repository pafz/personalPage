import "./Home.css"

const Home = (props) => {
  return (
    <span className='headerHome'>{props.title} {props.textCome} {props.showMyEvent}</span>
  )
}

export default Home;