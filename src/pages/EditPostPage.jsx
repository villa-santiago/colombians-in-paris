import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

function EditPostPage () {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/${id}`);
                if (!response.ok) throw new Error("Post not found");
                const data = await response.json();
                setFormData(data);
                setLoading(false);
            } catch (error){
                console.error("Error loading post:", error);
                alert("No se pudo cargar el post");
                navigate("/");
            }
        };

        fetchPost();
    }, [id,navigate]);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description || !formData.author) {
            alert("Por favor completa los campos obligatorios");
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/posts/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Error al actualizar el post");

            alert("Post actualizado correctamente");
            navigate("/");
        } catch (error) {
            console.error("Update error:", error);
            alert("Error al actualizar el post");
        }
        };

        if (loading || !formData) return <p>Cargando...</p>;

        return (
            <div>
                <h1 className="text-2xl font-bold mb-4">Edita tu post</h1>
                <PostForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isEditing={true}
                />
            </div>
        );
    }

    export default EditPostPage