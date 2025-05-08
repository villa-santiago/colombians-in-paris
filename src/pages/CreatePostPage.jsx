import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

function CreatePostPage () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(
        {
            title: "",
            author: "",
            category: "",
            location: "",
            description: "",
            price: "",
            contact: "",
            phone: ""
}

    );


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
        };

        
        const postData = {
            ...formData,
            date: new Date().toISOString().split("T")[0]
        };
    

    try {
        const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error ("Error de envio");
        }

        await response.json();
        alert("Tu post se ha creado exitosamente");
        navigate("/");


    } catch (error){
        console.error("Error:", error);
        alert("Error de envio");
    }
};

 

    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Publicar un nuevo post</h1>
            <PostForm formData={formData} onChange={handleChange} onSubmit={handleSubmit}/>
         </div>
        
    );
}

export default CreatePostPage