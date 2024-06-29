import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image1 from '/public/footer/image6.png'
import image5 from '/public/footer/image4.png'
import image4 from '/public/footer/image3.png'
import image3 from '/public/footer/image2.png'
import image2 from '/public/footer/image1.png'

const FooterCom = () => {
    return (
        <footer className=' bg-gray-800 px-10 text-white'>
           <div className="flex">
           <div className=' w-[25%] py-4'>
                <div>
                    <Image src="/logo.png" width={80} height={80} alt='Logo' />
                </div>
                <div className='my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi, consequatur modi accusamus nostrum dolorem sed cupiditate provident iure magni facere numquam minus.!!!
                </div>
                <div className=''>
                    <ul className='flex  gap-4'>
                        <li>
                            <Link href={"/"}>
                            <Image src="/Facebook.svg" alt="fb-icon" width={30} height={30}/>
                            </Link>
                        </li>
                        <li>    
                            <Link href={"/"}>
                            <Image src="/Instagram.svg" alt="fb-icon" width={30} height={30}/>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}> <Image src="/Twitter.svg"  alt="fb-icon" width={30} height={30}/></Link>
                        </li>
                        <li>
                            <Link href={"/"}><Image src="/Youtube.svg" alt="fb-icon" width={30} height={30}/></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-[25%]'>
                <h2 className='underline underline-offset-1 my-2'>Photo Gellary</h2>
                <div className="grid grid-cols-4 gap-2">
                    <Image src={image1} width={60} height={50} alt='icon' />
                     <Image src={image2} width={60} height={50} alt='icon'/>
                     <Image src={image3} width={60} height={50} alt='icon'/>
                     <Image src={image4} width={60} height={50} alt='icon'/>
                     <Image src={image5} width={60} height={50} alt='icon'/>
                </div>
            </div>
            <div className='w-[25%]'>
                <h2 className='underline underline-offset-1'>Tags</h2>
                <div className="grid grid-cols-4 gap-4 my-2 text-[8px]">
                    <span className='bg-green-400  justify-center  h-6 rounded-md flex items-center'>Home</span>
                    <span className='bg-blue-400 justify-center h-6 rounded-md flex items-center'>Article List</span>
                    <span className='bg-pink-400 justify-center h-6 rounded-md flex items-center'>Article Details</span>
                    <span className='bg-yellow-400 justify-center h-6 rounded-md flex items-center'>Sports</span><span className=' bg-amber-600 justify-center h-6 rounded-md flex items-center'>Business</span>
                </div>
            </div>
            <div className='w-[25%] flex flex-col px-4'>
                <h2 className='underline underline-offset-1 my-2'>Stay In Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ea.</p>
                <input type="text" placeholder='Your Email Address' className=' border-none outline-none rounded-md my-2 text-center' />
                <button className='bg-red-800 rounded-md'>Subscribe</button>
            </div>
           </div>
            <div className=' flex justify-center text-gray-500 text-sm py-2'><p>Copyright ©2024 Md Muktadir Nayem. All rights reserved.</p></div>
        </footer>
    );
};

export default FooterCom;