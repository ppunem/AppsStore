// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, changeActiveTabId} = props
  const {tabId, displayText} = eachTabItem

  const changeTabId = () => {
    changeActiveTabId(tabId)
  }

  return (
    <button type="button" className="tabItem" onClick={changeTabId}>
      {displayText}
    </button>
  )
}

export default TabItem
