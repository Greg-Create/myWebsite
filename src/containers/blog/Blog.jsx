import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
    return (
        <div className='gpt__blog section__padding' id="blog">
            <div className="gpt__blog-heading">
                <h1 className='blog-header'>Look at all these blogs</h1>
            </div>
                

                <div className='gpt__blog-container_groupB'>
                  
                    <Article imgurl={blog02} date="Feb 18 2022" title="Gregory's Birthday"/>
                    <Article imgurl={blog03} date="Feb 18 2022" title="Gregory's Birthday"/>
                    <Article imgurl={blog04} date="Feb 18 2022" title="Gregory's Birthday"/>
                    <Article imgurl={blog05} date="Feb 18 2022" title="Gregory's Birthday"/>
                    
                </div>
           
        </div>
    )
}

export default Blog