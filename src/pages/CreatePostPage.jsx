import { useState } from "react";

function CreatePostPage () {
    const [formData, setFormData] = useState(
        {
            title: "",
            author: "",
            category: "",
            location: "",
            description: "",
            price: "",
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
        }

        const currentDate = new Date().toISOString().split("T")[0];
        const postData = {
            ...formData,
            date: currentDate
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

        const data = await response.json();
        console.log("Respuesta del backend", data);

        alert ("Tu post ha sido creado exitosamente");

    } catch (error){
        console.error("Error:", error);
        alert("Error de envio");
    }
};

 

    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Crear un nuevo post</h1>
            <form className="space-y-8">

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

                <button
                    type = "submit"
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Crear Post
                </button>

            </form>

        </div>
        
    );
}

export default CreatePostPage