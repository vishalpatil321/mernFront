import News from "../News";
import {useEffect, useState} from "react";
import './Container.css';
import { SiApplenews } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Container() {
 let [articles ,setArticles] = useState([]);
 let [category,setCategory] = useState("india");
//  let [date,setDate] = useState("08");
 const navigate = useNavigate();

  useEffect(() =>{
     fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-7-today&apiKey=f88423e81ec9478c8b3c7a880566f7b9`)
     .then((response) => response.json())
     .then((news)=>{
      console.log(news);
      setArticles(news.articles)
     })
     .catch((err) =>{
      console.log(err)
     })
  } , [category]);

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
        <div className="user-name">
        <h3 className="text-dark">{data.name[0].toUpperCase()}</h3>
        </div>
        <input type="text" placeholder="Search here" onChange={(event) => {
          if(event.target.value !== ""){
           setCategory(event.target.value);
          }
          else{
            setCategory("india");
          }
        }}></input>
        {/* <input type="text" placeholder="By Date" className="date" onChange={(event) => {
          if(event.target.value !== 0){
            setDate(event.target.value);
          }
          else{
            setDate("08")
          }
        }}></input> */}
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
       <h1>Not Found This Type News</h1>
      
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
