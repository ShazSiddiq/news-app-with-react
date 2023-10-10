import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card'
import { getAllNewsStart } from '../redux/action/news.action'

export default function Home() {
  
  const news = useSelector(state=>state.news)
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllNewsStart())
    // console.log(news)
  },[news.length])
  return (
    <div>
      <div className="row">
        {
          news.length > 0 && news.map((item,index)=>(
            <Card item={item} key={index}/>
          ))
        }
      </div>
    </div>
  )
}
