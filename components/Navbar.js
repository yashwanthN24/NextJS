import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-6">
                <li>
                    <Link href="/">
                        <li className="hover:text-gray-400">Home</li>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <li className="hover:text-gray-400">About</li>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <li className="hover:text-gray-400">Contact</li>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;