import { Bars3Icon } from '@heroicons/react/24/outline';

function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 z-999 bg-white shadow-md md:hidden">
      <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
        <Bars3Icon className="h-6 w-6" />
      </button>
    </header>
  );
}

export default Header;
