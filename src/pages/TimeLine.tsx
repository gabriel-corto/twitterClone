
import Header from "../components/Header";
import Tweet from "../components/Tweet";

import avatar from '../assets/avatar.jpg'
import './TimeLine.css'
import { FormEvent, useState, KeyboardEvent } from "react";

export default function TimeLine() {

  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "Hello everybody 😀😀 iam create twitter app with React.js and TypeScript and it is very good and wonderfull",
    "It is awesome to work with React and TypeScript 💥🧨😀",
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    if(newTweet.length !== 0){
      setTweets([...tweets, newTweet])
      setNewTweet("")
    }
    else {
      return
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)){
      setTweets([...tweets, newTweet])
      setNewTweet("")
    }
  }

  return(
    <main className="timeline">
      <Header title="Home" />

      <form action="#" className='new-tweet-form' onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img className='avatar' src={avatar} alt="Gabriel avatar" />
          <textarea 
            id="tweet" 
            value={newTweet}
            placeholder='What´s happening?'
            onChange={(event) => {
              setNewTweet(event.target.value)
            }} 
            onKeyDown={handleHotKeySubmit}/>
        </label>

        <button type='submit' title="Create tweet (CTRL+ENTER)">Tweet</button>
      </form>

      <div className="separator" />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}
      
    </main>
  )
}