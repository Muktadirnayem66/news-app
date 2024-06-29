
import Image from 'next/image';
import Link from 'next/link';
import {IoIosSearch} from 'react-icons/io'
import DarkComp from './DarkComp';

const Navbar = () => {
    return (
        <nav className=' bg-gray-800 flex justify-between px-20 items-center'>
            <div>
                <Image src="/logo.png" width={120} height={90} alt='Logo'/>
            </div>
            <div>
            <ul className='flex gap-4 items-center text-white'>
                <li className='menu'>
                    <Link className='py-2 px-2 '  href={"/"}>Home</Link>
                </li>
                <li className='menu'>
                    <Link className='py-2 px-2 ' href={"/api/news"}>News</Link>
                </li>
                <li className='menu'>
                    <Link className='py-2 px-2 ' href={"/api/international"}>International</Link>
                </li>
                <li className='menu'>
                    <Link className='py-2 px-2 ' href={"/api/sports"}>Sports</Link>
                </li>
                <li className='menu'>
                    <Link className='py-2 px-2 ' href={"/api/business"}>Business</Link>
                </li>
            </ul>
            </div>
            <div className='flex'>
                <div className='flex items-center gap-2  '>
                    <input type="text" className='w-[150px] border-none outline-none rounded-md px-2' placeholder='search' />
                   <span className='text-white cursor-pointer'> <IoIosSearch/></span>
                </div>
                <div className=' pl-8'>
                    <DarkComp/>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;


