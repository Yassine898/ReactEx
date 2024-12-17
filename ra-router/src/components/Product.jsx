import { useParams } from "react-router-dom";

export default function Product() {
  var ListProduct = [
    { id: 1, nom: "Phone" },
    { id: 2, nom: "TV" },
    { id: 3, nom: "Movie" },
    { id: 4, nom: "PC" },
  ];
  let { id_prod } = useParams();
  var product = ListProduct.filter((prod) => prod.id == id_prod);

  return (
    <h1>
       {product.length > 0 ? "Product:"+product[0].nom : "Not Found"}
    </h1>
  );
}