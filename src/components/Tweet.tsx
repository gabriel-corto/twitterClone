
import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'


import avatar from '../assets/avatar.jpg'
import './Tweet.css'

interface TweetProps {
  content: string
}

export default function Tweet({ content }: TweetProps) {
  
  return(
    <Link to="/tweets" className='tweet'>
      <img src={avatar} alt="Gabriel avatar" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gabriel Francisco</strong>
          <span>@gabrielfr</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type='button' title=''>
            <ChatCircle weight='bold' />
            0
          </button>

          <button type='button'>
            <ArrowClockwise weight='bold' />
            0
          </button>

          <button type='button' title="Likes">
            <Heart weight='bold' />
            0
          </button>
        </div>
      </div>
    </Link>
  )
}