import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const Resume = ({ title, company, dates, duties = [] }) => {
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <div>
        {duties.map((duty) => (
          <div key={uuidv4()} className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>{duty}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Resume
