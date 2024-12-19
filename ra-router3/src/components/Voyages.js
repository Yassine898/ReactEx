import articlesData from './Articles.js';
import {Link} from 'react-router-dom'
export default function Cuisine() {
  const articles = articlesData.filter((article) => article.category === 'Voyages');
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