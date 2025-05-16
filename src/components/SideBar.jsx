import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function SideBar() {
  return (
    <div className="w-64 bg-slate-900 text-white p-6 flex flex-col space-between h-screen">
      <div className="mb-4">
        <img
          src={logo}
          alt="Site Logo"
          className="h-25 w-auto object-contain mx-auto"
        />
      </div>
      <hr className="my-6 border-gray-600" />
      <div>
        <nav className="flex flex-col">
          <Link to="/">Posts</Link>
          <Link to="/create">Crear Post</Link>
        </nav>
      </div>

      <hr className="my-6 border-gray-600" />

      <nav className="flex flex-col text-gray-400">
        <Link to="/rules">Normas de la comunidad</Link>
        <Link to="/themes">Otros temas</Link>
      </nav>

      <hr className="my-6 border-gray-600" />

      <nav className="flex flex-col text-gray-400">
        <Link to="/about">Información</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </div>
  );
}

export default SideBar;
