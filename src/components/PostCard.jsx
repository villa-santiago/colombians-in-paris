import { Link } from "react-router-dom";

function PostCard({ post, onFilterTagClick }) {
  return (
    <Link to={`/posts/${post.id}`} className="block">
      <div className="bg-white shadow p-4 rounded hover:bg-gray-100">
        <h2 className="text-xl font-semibold">{post.title}</h2>

        <p className="text-gray-600 text-md">
          Publicado por{" "}
          <span className="font-medium text-gray-800">{post.author}</span>{" "}
          <span className="text-md text-gray-400">{post.date}</span>
        </p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={(e) => {
              e.preventDefault(); 
              e.stopPropagation(); 
              onFilterTagClick("category", post.category);
            }}
            className="bg-green-100 text-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {post.category}
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFilterTagClick("location", post.location);
            }}
            className="bg-blue-100 text-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {post.location}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
