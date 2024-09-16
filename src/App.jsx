import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="titleText">chelsea's tunes</h1>
        </div>
        <div className="innerContainer">
          <div className="colLeft">
            <img className='artistImage' src='https://static01.nyt.com/images/2021/08/09/business/30CORNEROFFICE/merlin_191130972_60143bd4-ad58-4daf-82ea-4a93277ffa28-articleLarge.jpg?quality=75&auto=webp&disable=upscale' alt='Snoop Dogg Portrait'></img>
          </div>
          <div className="colRight">
            <h2>Snoop Dogg's Albums</h2>
            <details>
              <summary>The Blue Cartpet Treatment 2005</summary>
               <ol>
                <li>Intrology</li>
                <li>Think About It </li>
                <li>Crazy</li>
                <li>Vato</li>
                <li>Boss' Life</li>
               </ol>
            </details>
            <details>
              <summary>Rhythm & Gangsta 2003</summary>
               <ol>
                <li>I Love To Give You Light</li>
                <li>Bang Out</li>
                <li>Drop It Like It's Hot</li>
                <li>Signs</li>
                <li>The Bidness</li>
               </ol>
            </details>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
