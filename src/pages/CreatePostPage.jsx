import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { Link } from "react-router-dom";

function CreatePostPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    location: "",
    description: "",
    price: "",
    contact: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.author) {
      alert("Por favor completa los campos obligatorios");
      return;
    }

    const postData = {
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Error de envio");
      }

      await response.json();
      alert("Tu post se ha creado exitosamente");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Error de envio");
    }
  };

  return (
    <div>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Publicar un nuevo post</h1>
          <Link to="/">
            <button
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl hover:bg-gray-300"
              title="Cancelar publicación"
            >
              &#x00D7;
            </button>
          </Link>
        </div>
        <PostForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default CreatePostPage;
