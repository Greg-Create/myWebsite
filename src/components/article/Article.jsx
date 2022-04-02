import React from 'react';
import './article.css';
import { useState } from 'react';

const Article = ( {imgurl, date, title} ) => {

    const  [animation, setAnimation] = useState(false)

  const detectScroll =() => {
    if(window.scrollY >= 2200) {
      setAnimation(true)
    }
    else {
      setAnimation(false)
    }
  }

  window.addEventListener('scroll', detectScroll)

 
let onCondition = animation? "scale-up-center-one" : "article-hidden" 


    return (
        
        <div className={`gpt__blog-container_article ${onCondition}`}>

            <div className='gpt__blog-container_article-content'>
                <div className='gpt__blog-container_article-image'>
                <img src={imgurl}/>
                </div>
               
                <div>
                    
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>

            </div>
        
    )
}

export default Article
