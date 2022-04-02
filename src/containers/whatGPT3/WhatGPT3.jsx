import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import { useState} from 'react'


function WhatGPT3 ()  {


  const  [animation, setAnimation] = useState(false)

  const detectScroll =() => {
    if(window.scrollY >= 200) {
      setAnimation(true)
    }
    else {
      setAnimation(false)
    }
  }

  window.addEventListener('scroll', detectScroll)

 
let onCondition = animation? "scale-up-center-one" : "gpt3__whatgpt3-hide" 
  
return(
    <div className={`gpt3__whatgpt3 section__margin ${onCondition} ` }    id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 >The amount of fish is beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  )
}




export default WhatGPT3;