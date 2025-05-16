import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:static md:translate-x-0`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Logo</h1>

          <nav className="space-y-2">
            <Link
              to="/"
              onClick={toggleSidebar}
              className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
            >
              Posts
            </Link>
            <Link
              to="/create"
              onClick={toggleSidebar}
              className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
            >
              Crear Post
            </Link>
          </nav>

          <hr className="my-6 border-gray-200" />

          <nav className="space-y-2">
            <Link
              to="/rules"
              onClick={toggleSidebar}
              className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
            >
              Normas de la comunidad
            </Link>
            <Link
              to="/themes"
              onClick={toggleSidebar}
              className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
            >
              Otros temas
            </Link>
          </nav>

          <hr className="my-6 border-gray-200" />

          <nav className="space-y-2">
            <Link
              to="/about"
              onClick={toggleSidebar}
              className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
            >
              Información
            </Link>
            <Link
              to="/contact"
              onClick={toggleSidebar}
              className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
