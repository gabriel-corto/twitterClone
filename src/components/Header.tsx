
import { Sparkle } from "phosphor-react";

import './Header.css'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return(
    <div className="timeline-header"> 
      <h1>{title}</h1>
      <Sparkle /> 
    </div>
  )
}