import {useParams} from 'react-router-dom'
import ArticlesData from './Articles';

export default function ArticlesDetails(){
    let {id} = useParams()

    const articles = ArticlesData.filter((article)=>article.id==id)


    return (
      <div className="articles-details">
        {articles.map((article) => (
          <div key={article.id}>
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.category}</p>
            <p className="stock">Stock: {article.stock}</p>
          </div>
        ))}
      </div>
  );
  
}