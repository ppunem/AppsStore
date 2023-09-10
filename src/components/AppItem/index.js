// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <div className="main-container">
      <div className="app-container">
        <img src={imageUrl} className="app-image" alt={appName} />
        <p>{appName}</p>
      </div>
    </div>
  )
}

export default AppItem
