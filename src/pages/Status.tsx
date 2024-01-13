
import Header from "../components/Header";
import Tweet from "../components/Tweet";

import avatar from '../assets/avatar.jpg'
import './Status.css'
import { FormEvent, useState, KeyboardEvent } from "react";
import { PaperPlaneRight } from "phosphor-react";

export default function Status() {

  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    "Yeas it is gooooodddd !!! 😍😎😎😎",
    "Okay, is is a good progress 💖💖"
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    if(newAnswer.length !== 0){
      setAnswers([...answers, newAnswer])
      setNewAnswer("")
    }
    else {
      return
    }
  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)){
      setAnswers([...answers, newAnswer])
      setNewAnswer("")
    }
  }

  return(
    <main className="timeline">
      <Header title="Tweets" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 💥💥🧨 A fuga at aliquam laboriosam pariatur mollitia voluptatum dolore, unde vero repudiandae, dolorum hic eos tempora! Accusantium nam voluptate itaque consectetur cumque!" />
      
      <div className="separator" />

      <form action="#" className='answer-tweet-form' onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img className='avatar' src={avatar} alt="Gabriel avatar" />
          <textarea 
            id="answer" 
            placeholder='Answer your tweet'
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            onKeyDown={handleHotKeySubmit} />
        </label>

        <button type='submit' title="Add answer (CTRL+ENTER)">
          <PaperPlaneRight weight="bold" />
          <span>Answer</span>
        </button>
      </form>
      
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer}/>
      })}
    </main>
  )
}