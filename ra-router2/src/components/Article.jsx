import { useParams } from "react-router-dom";
import articlesData from "./articleData";


function Article() {
  const { id } = useParams();
  const article = articlesData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <p>Stock: {article.stock}</p>
    </div>
  );
}

export default Article;