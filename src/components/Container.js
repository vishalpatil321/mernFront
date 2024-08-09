import News from "../News";
import {useEffect, useState} from "react";
import './Container.css';
import { SiApplenews } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Container() {
 let [articles ,setArticles] = useState([]);
 const navigate = useNavigate();


  useEffect(() =>{
     fetch(`https://news-backend-pg0o.onrender.com/api/news`,{
      headers:{
        'authorization':`Bearer ${JSON.parse(localStorage.getItem('news-user')).token}`
      }
     })
     .then((response) => response.json())
     .then((news)=>{
      
      setArticles(news.articles)
     })
     .catch((err) =>{
      console.log(err)
     })
  } , []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/');
    message.success('Logout Successfully.')
    
  }

  const data = JSON.parse(localStorage.getItem('news-user'));
  return (
    <div className="App">
      <header>
        <h1><SiApplenews/> News App</h1>
        <div className="user-name-remain">
        <div className="user-name-1">
         <h2 className="text-dark">{data.name[0].toUpperCase()}</h2>
        </div>
        <h3>{data.name.slice(1)}</h3>
        </div>
         <button className="btn btn-dark btn-logout" onClick={handleLogOut}>Logout</button> 
     </header>
     <div className="news-articles">
      {
        articles ?
          articles.map((article) => {
            return(
            <News article = {article}></News>
            )
          })
        :
       <h1>Not Found News</h1>
      
      }
     
     </div>
     <footer>
      <h3>Contact me</h3>
      <p>Email :vishalchhagan28@gmail.com</p>
      
      <p>Phone : 8319976513</p>
     </footer>

    </div>
  );
}

export default Container;
