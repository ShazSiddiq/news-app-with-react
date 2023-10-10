import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../Card';
import { getCategoryNewsStart } from '../redux/action/news.action';

export default function Category() {
  let { id }= useParams();
  console.log(id,'jbjkmkm');
  const dispatch=useDispatch();
  const categoryNews = useSelector(state=>state.newsCategories)
// console.log(categoryNews,"aaaaaa")
  useEffect(()=>{
    dispatch(getCategoryNewsStart(id))
  },[id,categoryNews.length])
  return (
    <div>
      <div className="row">
      {
          categoryNews.length > 0 && categoryNews.map((item,index)=>(
            <Card item={item} key={index}/>
          ))
        }
      </div>
    </div>
  )
}
