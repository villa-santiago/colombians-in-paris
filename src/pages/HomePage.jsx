import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAllPosts(sorted);
        setFilteredPosts(sorted);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handleFilterTagClick = (type, value) => {
    setActiveFilter({ type, value });
    setFilteredPosts(allPosts.filter((post) => post[type] === value));
  };

  const clearFilter = () => {
    setActiveFilter(null);
    setFilteredPosts(allPosts);
  };

  return (
    <div>
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <Link to = "/create">
      <button
      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
      >
      +
      </button>
      </Link>
      </div>

      {activeFilter && (
        <div className="mb-4">
          <p>
            Filtrando por <strong>{activeFilter.type}</strong>:{" "}
            {activeFilter.value}{" "}
            <button onClick={clearFilter} className="ml-2 text-blue-500 underline">
              Borrar filtro
            </button>
          </p>
        </div>
      )}

      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} onFilterTagClick={handleFilterTagClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
