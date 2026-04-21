import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section Experience'>
      <h2 className='section__title'>Professional Experience</h2>

      <div className='experience__grid'>
        {experience.map((job) => (
          <div key={uniqid()} className='job_image'>
            <div className='job'>
              <p>
                {job.dates[0]} &rarr; {job.dates[1]}
              </p>
              <h3>{job.position}</h3>
              <h5>{job.company}</h5>
            </div>
            <div className='job'>
              <ul className='jobList'>
                {job?.points?.map((item) => (
                  <li key={uniqid()}>{item}</li>
                ))}
              </ul>
            </div>
            <img src={job.logo} alt={`${job.company} Logo`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
