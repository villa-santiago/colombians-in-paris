import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PostDetailPage(){
    const {id} = useParams();
    const [post, setPost] = useState(null);


useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((data) => setPost(data))
    .catch((err) => console.error("Error cargando posts:", err));
}, [id]);

if (!post) return <p>No se ha encontrado este post</p>;

return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Publicado por <span className="font-medium text-gray-800">{post.author}</span> -{" "}
        <span className="text-sm text-gray-400">{post.date}</span>
      </p>
      <p className="text-lg text-gray-700 mb-4">{post.description}</p>
      <p className="text-md text-gray-600 mb-1"><strong>Categoría:</strong> {post.category}</p>
      <p className="text-md text-gray-600 mb-1"><strong>Ubicación:</strong> {post.location}</p>
      <p className="text-md text-gray-600"><strong>Precio:</strong> €{post.price}</p>
    </div>
);
}

export default PostDetailPage