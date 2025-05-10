function PostForm ({formData, onChange, onSubmit, isEditing = false, onDelete}) {
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
                    <label className="block font-medium mb-1">Ubicacion* <span className="text-md text-gray-400">(En qué parte de la ciudad te encuentras?)</span>
                    <select name = "location"
                        value = {formData.location}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                    <option value="Paris 1 -Louvre">Paris 1 -Louvre </option>
                    <option value="Paris 2 - Bourse">Paris 2 - Bourse </option>
                    <option value="Paris 3 - Temple">Paris 3 - Temple </option>
                    <option value="Paris 4 - Hôtel-de-Ville">Paris 4 - Hôtel-de-Ville </option>
                    <option value="Paris 5 - Panthéon">Paris 5 - Panthéon </option>
                    <option value="Paris 6 - Luxembourg">Paris 6 - Luxembourg </option>
                    <option value="Paris 7 - Palais-Bourbon">Paris 7 - Palais-Bourbon </option>
                    <option value="Paris 8 - Élysée">Paris 8 - Élysée </option>
                    <option value="Paris 9 - Opéra">Paris 9 - Opéra </option>
                    <option value="Paris 10 - Entrepôt">Paris 10 - Entrepôt </option>
                    <option value="Paris 11 - Popincourt">Paris 11 - Popincourt </option>
                    <option value="Paris 12 - Reuilly">Paris 12 - Reuilly </option>
                    <option value="Paris 13 - Gobelins">Paris 13 - Gobelins </option>
                    <option value="Paris 14 - Observatoire">Paris 14 - Observatoire </option>
                    <option value="Paris 15 - Vaugirard">Paris 15 - Vaugirard </option>
                    <option value="Paris 16 - Passy">Paris 16 - Passy </option>
                    <option value="Paris 17 - Batignolles-Monceaux">Paris 17 - Batignolles-Monceaux </option>
                    <option value="Paris 18 - Buttes-Montmartre">Paris 18 - Buttes-Montmartre </option>
                    <option value="Paris 19 - Buttes-Chaumont">Paris 19 - Buttes-Chaumont </option>
                    <option value="Paris 20 - Ménilmontant">Paris 20 - Ménilmontant </option>
                    <option value="Fuera de París">Fuera de París</option>

                    
                    </select>
                    </label>
                        
                    
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

              <div className="flex gap-4">
                <button
                    type="submit"
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    {isEditing ? "Guardar cambios" : "Publicar post"}
                </button>

                {isEditing && onDelete && (
                    <button
                        type="button"
                        onClick={onDelete}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Eliminar post
                    </button>
                )}


              </div>

            </form>

    );
}

export default PostForm