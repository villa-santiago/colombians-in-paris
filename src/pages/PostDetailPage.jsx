import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PostDetail from "../components/PostDetail";

function PostDetailPage(){
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    


useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((data) => setPost(data))
    .catch((err) => console.error("Error cargando posts:", err));
}, [id]);

if (!post) return <p>No se ha encontrado este post</p>;

return <>
    <button
    onClick={() => navigate("/")}
    className="mb-4 text-gray-400 hover:text-gray-800 transition"
    >
        ← Regresar
    </button>
    <PostDetail post={post}/>
</>


}



export default PostDetailPage