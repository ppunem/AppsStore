// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, changeActiveTabId, isActive} = props
  const {tabId, displayText} = tabItem

  const changeTabId = () => {
    changeActiveTabId(tabId)
  }

  const underline = isActive ? 'active' : ''

  return (
    <button
      type="button"
      className={`tabItems ${underline}`}
      onClick={changeTabId}
    >
      {displayText}
    </button>
  )
}

export default TabItem
