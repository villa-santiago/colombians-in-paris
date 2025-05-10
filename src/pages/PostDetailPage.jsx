import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostDetail from "../components/PostDetail";

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

return <>
    <PostDetail post={post}/>
</>


}



export default PostDetailPage