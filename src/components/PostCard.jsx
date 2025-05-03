function PostCard({ post }) {
  return (

    <div className="bg-white shadow p-4 rounded">
    
      <h2 className="text-xl font-semibold">
      {post.title}
      </h2>

      <p className="text-gray-600 text-md">
      {post.date}
      </p>

      <p className="text-gray-600 text-md pt-2">
      {post.description}
      </p>

      <div className="flex gap-2 mt-4">
        <span className="bg-green-100 text-gray-800 text-sm px-3 py-1 rounded">
          {post.category}
        </span>

        <span className="bg-blue-100 text-gray-800 text-sm px-3 py-1 rounded">
          {post.location}
        </span>
      </div>
    </div>
  );
}

export default PostCard;
