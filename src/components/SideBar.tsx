
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, TwitterLogo, Pencil, Moon, Sun, DotsThreeCircle  } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import './SideBar.css'
import { useState } from 'react';

const body = document.querySelector("body") as HTMLBodyElement

export default function SideBar() {
  const [DarkMode, setDarkMode] = useState(true)

  function handleChangeTheme(){
    setDarkMode(!DarkMode)
  }
  function activeDarkMode(){
    body.classList.add("dark-theme")
  }
  function removeDarkMode() {
    body.classList.remove("dark-theme")
  }
  { DarkMode ?  activeDarkMode() : removeDarkMode() }

  return(
    <aside className="sidebar">
      <TwitterLogo className='logo' weight='fill' />

      <nav className='main-navgation'>
        <NavLink to="/">
          <House weight='bold' />
          <span>Home</span>
        </NavLink>
        <a href="#">
          <Hash weight="bold" />
          <span>Explore</span>
        </a>
        <a href="#">
          <Bell weight="bold" />
          <span>Notifications</span>
        </a>
        <a href="#">
          <Envelope weight="bold" />
          <span>Messages</span>
        </a>
        <a href="#">
          <BookmarkSimple weight="bold" />
          <span>Bookmarks</span>
        </a>
        <a href="#">
          <FileText weight="bold" />
          <span>Lists</span>
        </a>
        <a href="#">
          <User weight="bold" />
          <span>Profile</span>
        </a>
        <a href="#">
          <DotsThreeCircle weight="bold" />
          <span>More</span>
        </a>
        <a href="#" onClick={handleChangeTheme}>
          { DarkMode ? <Sun /> : <Moon /> } 
          <span>Theme</span>
        </a>
      </nav>

      <button className='new-tweet' type='button'>
        <Pencil weight='bold' />
        <span>Tweet</span>
      </button>
    </aside>
  )
}