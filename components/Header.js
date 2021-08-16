import Image from "next/image"
import { SearchIcon , GlobeAltIcon,UserCircleIcon,MenuIcon ,UserIcon} from '@heroicons/react/solid'


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left */}
            <div className="relative flex cursor-pointer h-10 items-center my-auto">
                <Image src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* center */}
            <div className="flex item-center md:border-2 rounded-full py-2">
                <input className="pl-5 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder-gray-400" type="" placeholder="start your search" />
                <SearchIcon className=" hidden bg-red-400 text-white rounded-full h-8 cursor-pointer md:inline-flex md:mx-2"/>
            </div>
            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
            
                <div className="flex items-center border-2 rounded-full p-2 space-x-2 hover:shadow-md active:scale-90 transition duration-90">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            
            </div>
        </header>
    )
}

export default Header
