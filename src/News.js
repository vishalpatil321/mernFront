import "./News.css";
let News = (props) => {
    console.log(props)
   return(
    <div className="news">
        <div className="des">
        <h3>{props.article.title ?.substring(0,20)}</h3>
        <a href={props.article.url}>Click to more</a>
        <p>{props.article.description ?.substring(0,20)}</p>
        <p>Author:{props.article.author}</p>
        <p>Source:{props.article.source.name}</p>

        </div>
        <img src={props.article.urlToImage}></img>
    </div>
   );
};

export default News;