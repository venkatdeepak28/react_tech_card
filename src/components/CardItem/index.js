// Write your code here.
import './index.css'

const Component = props => {
  const {value} = props
  const {title, description, imgUrl} = value
  return (
    <div className="inner-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="logo-container">
        <img className="img" src={imgUrl} alt={title} />
      </div>
    </div>
  )
}
export default Component
