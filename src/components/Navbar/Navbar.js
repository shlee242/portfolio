import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import {
  projects,
  skills,
  experience,
  education,
  contact,
} from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const location = useLocation()

  const toggleNavList = () => setShowNavList(!showNavList)

  const isHomePage = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    toggleNavList()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <Link to='/' onClick={toggleNavList} className='link link--nav'>
            Home
          </Link>
        </li>

        {isHomePage && experience.length ? (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollToSection('experience')}
              className='link link--nav nav__button'
            >
              Experience
            </button>
          </li>
        ) : null}

        {isHomePage && projects.length ? (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollToSection('projects')}
              className='link link--nav nav__button'
            >
              Projects
            </button>
          </li>
        ) : null}

        {isHomePage && education.length ? (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollToSection('education')}
              className='link link--nav nav__button'
            >
              Education
            </button>
          </li>
        ) : null}

        {isHomePage && skills.length ? (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollToSection('skills')}
              className='link link--nav nav__button'
            >
              Skills
            </button>
          </li>
        ) : null}

        {isHomePage && contact.email ? (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollToSection('contact')}
              className='link link--nav nav__button'
            >
              Contact
            </button>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
