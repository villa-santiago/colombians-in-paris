import { useState } from "react";
import { useNavigate } from "react-router-dom";


function PostDetail({ post }) {
  const navigate = useNavigate();
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

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
        
          <p className="text-gray-600">
          <strong>Email: </strong>{""}
          {showEmail ? (
            post.contact
          ): (
            <button 
            onClick={() => setShowEmail(true)}
            className="text-gray-400 hover:text-gray-800 transition"
            >
              Click para mostrar
            </button>
          )}
          </p>

          <p className="text-gray-600">
          <strong>Teléfono: </strong>{""}
          {showPhone ? (
            post.phone 
          ) : (
            <button 
            onClick={() => setShowPhone(true)}
            className="text-gray-400 hover:text-gray-800 transition"
            >
              Click para mostrar
            </button>
            )}
          
          </p>


          <p className="text-gray-600"><strong>Ubicación:</strong> {post.location}</p>
          <p className="text-gray-600"><strong>Precio:</strong> €{post.price}</p>
        </div>
  
        <hr className="my-6 border-gray-200" />

        <div className="flex justify-between items-center mt-6">
         <button
        className="text-blue-600 hover:underline transition"
        onClick={() => navigate(`/posts/${post.id}/edit`)}
        >
        Editar Post
        </button>
        <p className="text-sm text-gray-400">
          <span className="font-medium text-gray-500">Post ID:</span> {post.id}
        </p>
       
        </div>
      </div>
    );
  }
  
  export default PostDetail;
  