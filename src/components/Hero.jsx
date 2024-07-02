import React from 'react'
import {logo} from '../assets';

export default function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
        <button className='black_btn' type="button" onClick={()=>{window.open('https://github.com/adrianhajdin/project_ai_summarizer/tree/main')}}>
          Github
        </button>
      </nav>


      <h1 className="head_text">
        Summarize Article With <br className='max-md:hidden'/>
        <span className='orange_gradient'>m_AI_nak</span>
      </h1>
      <h2 className="desc">
        Simplify Your Articles With Sumz! Transform Lenghthy Articles Into Clear And Concise Summeries!
      </h2>
    </header>
  )
}
