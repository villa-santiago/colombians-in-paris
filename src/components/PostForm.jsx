function PostForm ({formData, onChange, onSubmit}) {
    return (
        <form className="space-y-8" onSubmit={onSubmit}>

                 <div>
                    <label className="block font-medium mb-1">Tu nombre y apellido*</label>
                    <input 
                        type = "text"
                        name = "author"
                        value = {formData.author}
                        onChange={onChange}
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
                        onChange={onChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Descripcion* <span className="text-md text-gray-400">(Describe brevemente tu servicio)</span></label>
                    <textarea
                        name = "description"
                        value = {formData.description}
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Precio</label>
                    <input 
                        type = "number"
                        name = "price"
                        value = {formData.price}
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
                        className="w-full bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min ="0"
                    />
                </div>

               <button 
               type="submit"
               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
               >
                Publicar post
               </button>

            </form>

    );
}

export default PostForm