import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgURL={blog01} date="Nov 4, 2023" title="GPT3-and open AI is the future.Let us explore how it is?" />
        </div>
        <div className='gpt3__blog-container__groupb'>
          <Article imgURL={blog02} date="Nov 4, 2023" title="GPT3-and open AI is the future.Let us explore how it is?" />
          <Article imgURL={blog03} date="Nov 4, 2023" title="GPT3-and open AI is the future.Let us explore how it is?" />
          <Article imgURL={blog04} date="Nov 4, 2023" title="GPT3-and open AI is the future.Let us explore how it is?" />
          <Article imgURL={blog05} date="Nov 4, 2023" title="GPT3-and open AI is the future.Let us explore how it is?" />

        </div>

      </div>
    </div>
  )
}

export default Blog