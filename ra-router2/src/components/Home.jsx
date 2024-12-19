import { Link } from "react-router-dom";
import articlesData from "./articleData";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Articles</h1>
      <div className="article-list">
        {articlesData.map((article) => (
          <div key={article.id} className="article-item">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Stock: {article.stock}</p>
            <Link to={`/article/${article.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;