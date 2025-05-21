import { useEffect, useState } from "react"
import JobInfo from "./JobInfo"
import BtnContainer from "./BtnContainer"

const url = "https://www.course-api.com/react-tabs-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  // Current Item

  const fetchJobs = async () => {
    try {
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      {/* Button container */}
      <BtnContainer jobs={jobs} />
      {/* Job Info */}
      <JobInfo jobs={jobs} />
    </section>
  )
}
export default App
