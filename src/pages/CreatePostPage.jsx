import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <h1 className="text-2xl font-bold mb-4">Crear un nuevo post</h1>
            <form className="space-y-8" onSubmit={handleSubmit}>

                 <div>
                    <label className="block font-medium mb-1">Tu nombre y apellido*</label>
                    <input 
                        type = "text"
                        name = "author"
                        value = {formData.author}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Qué servicio ofreces?*</label>
                    <input 
                        type = "text"
                        name = "title"
                        value = {formData.title}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Descripcion* <span className="text-md text-gray-400">(Describe brevemente tu servicio)</span></label>
                    <textarea
                        name = "description"
                        value = {formData.description}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Ubicacion* <span className="text-md text-gray-400">(En qué parte de la ciudad te encuentras?)</span></label>
                    <input 
                        type = "text"
                        name = "location"
                        value = {formData.location}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Categoria</label>
                    <input 
                        type = "text"
                        name = "category"
                        value = {formData.category}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Precio</label>
                    <input 
                        type = "number"
                        name = "price"
                        value = {formData.price}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min ="0"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Correo electronico</label>
                    <input 
                        type = "email"
                        name = "contact"
                        value = {formData.contact}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min ="0"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Telefono</label>
                    <input 
                        type = "tel"
                        name = "phone"
                        value = {formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min ="0"
                    />
                </div>

                <button
                    type = "submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Crear Post
                </button>

            </form>

        </div>
        
    );
}

export default CreatePostPage