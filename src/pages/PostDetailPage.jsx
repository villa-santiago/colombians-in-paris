import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <PostDetail post={post}/>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => navigate(`/posts/${post.id}/edit`)}>
    Editar Post
    </button>
</>


}



export default PostDetailPage