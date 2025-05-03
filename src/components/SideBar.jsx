import { Link } from "react-router-dom";


function SideBar () {
    return (
        <div className="w-64 bg-gray-800 text-white p-6 flex flex-col space-between h-screen">
            <h1 className="text-2xl font-bold mb-4">Logo</h1>
            <div>
            <nav className="flex flex-col">
                <Link to = "/">Posts</Link>
                <Link to = "/create">Crear Post</Link>
            </nav>
            </div>

            <hr className="my-6 border-gray-600" />

            <nav className="flex flex-col text-gray-400">
                <Link to = "/about">Información</Link>
                <Link to = "/contact">Contacto</Link>
            </nav>
        </div>
    );
}

export default SideBar