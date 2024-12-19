import articlesData from './Articles';
import {Link} from 'react-router-dom'

export default function Cuisine() {
  const articles = articlesData.filter((article) => article.category === 'Cuisine');
  return (
    <div>
      <h1>Articles de Cuisine</h1>
      <div>
        {articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <Link to={'/articles/'+article.id}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}