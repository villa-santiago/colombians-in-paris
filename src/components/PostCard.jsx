import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (

    <Link to = {`/posts/${post.id}`} className="">

    <div className="bg-white shadow p-4 rounded">
    
      <h2 className="text-xl font-semibold">
      {post.title}
      </h2>

      <p className="text-gray-600 text-md">Publicado por <span className="font-medium text-gray-800">{post.author}</span>{" "}<span className="text-md text-gray-400">{post.date}</span></p>

      {/* <p className="text-gray-600 text-md pt-2">
      {post.description}
      </p> */}

      <div className="flex gap-2 mt-4">
        <span className="bg-green-100 text-gray-800 text-sm px-3 py-1 rounded">
          {post.category}
        </span>

        <span className="bg-blue-100 text-gray-800 text-sm px-3 py-1 rounded">
          {post.location}
        </span>
      </div>
    </div>
    </Link>
  );
}

export default PostCard;
