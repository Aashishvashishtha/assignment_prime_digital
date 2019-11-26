import axios from 'axios';
import { PAGE1 } from './_ActionTypes';

const fetchSuccess = (data) => ({
  type: PAGE1.FETCH_SUCCESS,
  page1: data,
  loading: false
})


const fetchFailed = () => ({
  type: PAGE1.FETCH_FAILED
})


export function fetchPage1(){
  return (dispatch) => {
    axios.get(`http://localhost:3001/posts`).then((res)=>{
      if(res.status === 200){
        console.log(res.data)
        dispatch(fetchSuccess(res.data))
        
      }else{
        dispatch(fetchFailed())
      }
    })
  }
}

export function fetchFavListData(){
  return (dispatch) => {
    axios.get(`http://localhost:3001/posts?isFavourite=true`).then((res)=>{
      if(res.status === 200){
        console.log(res.data)

        dispatch(fetchSuccess(res.data))
        
      }else{
        dispatch(fetchFailed())
      }
    })
  }
}

export function favouriteList(index){
  return (dispatch) => {
    axios.put(`http://localhost:3001/posts`).then((res)=>{
      if(res.status === 200){
        console.log(res.data)
      
        dispatch(fetchSuccess(res.data))
        
      }else{
        dispatch(fetchFailed())
      }
    })
  }
}
