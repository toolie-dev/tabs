import React from 'react'

const Tab = ({ id, company, activeResume, setActiveResume }) => {
  let classList = 'job-btn'
  if (id == activeResume) {
    classList += ' active-btn'
  }
  return (
    <button onClick={setActiveResume} className={classList}>
      {company}
    </button>
  )
}

export default Tab
