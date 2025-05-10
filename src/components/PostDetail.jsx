
import { useNavigate } from "react-router-dom";
import editIcon from "../assets/edit.png"

function PostDetail({ post }) {
  const navigate = useNavigate();

    return (
      <div className="max-w-3xl p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
  
        <div className="text-sm text-gray-500 mb-4">
          Publicado por{" "}
          <span className="font-semibold text-gray-800">{post.author}</span>{" "}
          - <span className="text-gray-400">{post.date}</span>
        </div>
  
        <p className="text-gray-700 text-lg mb-6">{post.description}</p>

        <hr className="my-6 border-gray-200" />
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <p className="text-gray-600"><strong>Email:</strong> {post.contact}</p>
          <p className="text-gray-600"><strong>Teléfono:</strong> {post.phone}</p>
          <p className="text-gray-600"><strong>Ubicación:</strong> {post.location}</p>
          <p className="text-gray-600"><strong>Precio:</strong> €{post.price}</p>
        </div>
  
        <hr className="my-6 border-gray-200" />

        <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-400">
          <span className="font-medium text-gray-500">Post ID:</span> {post.id}
        </p>
        <button
        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
        onClick={() => navigate(`/posts/${post.id}/edit`)}
        >
        <img src={editIcon} className="w-5 h-5" />
        </button>
        </div>
      </div>
    );
  }
  
  export default PostDetail;
  