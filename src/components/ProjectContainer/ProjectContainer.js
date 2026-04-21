import uniqid from 'uniqid'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
import DescriptionIcon from '@material-ui/icons/Description'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import './ProjectContainer.css'

function ProjectContainer({ project }) {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <div
      className='project'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div>
        <h3>{project.name}</h3>
        <h5>{project.subtitle}</h5>
        {project.date && <p className='project__date'>{project.date}</p>}

        {isHovering && project.backgroundImage ? (
          <img src={project.backgroundImage} alt={project.name} />
        ) : (
          /* 수정된 부분: 배열이면 리스트로, 문자열이면 기존처럼 출력 */
          <div className='project__description'>
            {Array.isArray(project.description) ? (
              <ul className='project__description-list'>
                {project.description.map((item) => (
                  <li key={uniqid()} className='project__description-item'>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{project.description}</p>
            )}
          </div>
        )}
      </div>

      <div>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {project.article && (
          <a
            href={project.article}
            aria-label='live preview'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <DescriptionIcon />
          </a>
        )}

        {project.video && (
          <a
            href={project.video}
            aria-label='live preview'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <YouTubeIcon />
          </a>
        )}

        {project.game && (
          <a
            href={project.game}
            aria-label='live preview'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <VideogameAssetIcon />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
