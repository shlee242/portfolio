import uniqid from 'uniqid'
import DescriptionIcon from '@material-ui/icons/Description'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section Education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__grid'>
        {education.map((school) => (
          <div key={uniqid()} className='school_image'>
            <img src={school.logo} alt={`${school.university} Logo`} />
            <div className='school'>
              <p>
                {school.dates[0]} &rarr; {school.dates[1]}
              </p>
              <h3>{school.university}</h3>
              <h5>{school.school}</h5>
              <ul>
                {school?.degrees?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>

              <div className='school__links'>
                {school.article && (
                  <a
                    href={school.article}
                    aria-label='live preview'
                    className='link link--icon'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <DescriptionIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
