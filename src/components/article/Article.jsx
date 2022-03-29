import React from 'react';
import './article.css';

const Article = ( {imgurl, date, title} ) => {
    return (
        
        <div className='gpt__blog-container_article'>

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
