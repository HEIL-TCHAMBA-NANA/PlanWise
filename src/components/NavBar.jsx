import Resources from "./Resources";
import Logo from "./Logo";
function NavBar(){
    return (
        <nav className="bg-gray-100 fixed w-full z-10 top-0 start-0">
            <div className="p-4 flex items-center justify-between flex-wrap">
                <Logo className="block ml-20 pt-7 "></Logo>
                <span className="block px-3 py-2 md:hover:bg-blue-700 md:hover:text-white ml-4">Fonctionnalites</span>
                <span className="block px-3 py-2 md:hover:bg-blue-700 md:hover:text-white ml-4">Equipes</span>
                <Resources className="block px-3 py-2 md:hover:bg-blue-700 md:hover:text-white ml-4">Resources</Resources>
            </div>
        </nav>
    )
}


export default NavBar;