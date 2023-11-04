import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData =[
  {
    title:'Improving  and disturbuts instandly',
    text:'from the fine john he give of rich he they age  drow like improving and distrbuting may instydf was distrbuting may instydf was h'
  },
  {
    title:'becoming the trend active',
    text:'from the fine john he give of rich he they age  drow like improving and distrbuting may instydf was distrbuting may instydf was h'
  },
  {
    title:'message or am nothing ',
    text:'from the fine john he give of rich he they age  drow like improving and distrbuting may instydf was distrbuting may instydf was h'
  },
  {
    title:'Realy boy law county',
    text:'from the fine john he give of rich he they age  drow like improving and distrbuting may instydf was distrbuting may instydf was h'
  }
]
const Features = () => {
  return (


    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It.Step into Future Today & Make it Happen.</h1>
        <p>Request Realy Access to get Started</p>
      </div>
      <div className='gpt3__features-container'>
      {
        featuresData.map((item,index)=>(
        <Feature title={item.title} text={item.text} key={item.title +index}/>
        ))
      }
      </div>
    </div>
  )
}

export default Features