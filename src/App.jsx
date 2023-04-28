import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Resume from './components/Resume'
import Tab from './components/Tab'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [resumes, setResumes] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [activeResume, setActiveResume] = useState(0)
  const fetchResumes = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        setIsLoading(false)
        throw new Error('Server error')
      }
      const resumes = await response.json()
      setResumes(resumes)
      setActiveResume(resumes[0].id)
    } catch (e) {
      return <h1>{e}</h1>
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchResumes()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (resumes.length == 0) {
    return <h1>No resumes</h1>
  }

  return (
    <section className='jobs-center'>
      <div className='btn-container'>
        {resumes.map(({ id, company }) => (
          <Tab
            key={id}
            id={id}
            company={company}
            activeResume={activeResume}
            setActiveResume={() => setActiveResume(id)}
          />
        ))}
      </div>
      <Resume {...resumes.find(({ id }) => id == activeResume)} />
    </section>
  )
}

export default App
