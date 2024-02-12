
import { BsHeart } from "react-icons/bs";
import img1 from '../assets/71Q7UD62m8L-_AC_SX380_.jpg';
import img2 from '../assets/51zUfH2NZDL-_AC_SX380_.jpg';
import img3 from '../assets/71phLcbyppL-_AC_SX380_.jpg';
import img4 from '../assets/61eAKrmeINL-_AC_SX380_.jpg';
import img5 from '../assets/71Rc6Sgv4cL-_AC_SX380_.jpg';
import img6 from '../assets/81XUlTnfheL-_AC_SX380_.jpg';

import img7 from '../assets/images/COOP-SUMMER-NEW-BALANCE-TRIPTYCH-1-896x896-_SX1024_.png';
import img8 from '../assets/images/COOP-SUMMER-HEY-DUDE-TRIPTYCH-2-896x896-_SX1024_.png';
import img9 from '../assets/images/COOP-SUMMER-FAVORITE-STAPLES-TRIPTYCH-3-896x896-_SX1024_.png';


import img11 from '../assets/images/71UkXThsG9L-_AC_SR255-340__FMwebp_.jpg'
import img12 from '../assets/images/71eXzB0mQxL-_AC_SR255-340__FMwebp_.jpg'
import img13 from '../assets/images/81KEyTA20DL-_AC_SR255-340__FMwebp_.jpg'

import img14 from '../assets/images/6075812.jpg'
import img15 from '../assets/images/6075817.jpg'
import img16 from '../assets/images/6075819.webp'
import img17 from '../assets/images/6075818.webp'
import img18 from '../assets/images/6075823.webp'

import img19 from '../assets/images/TORY-BURCH-LAUREN-JUNE-AOE-960x500-_SX10221_.png'
import img20 from '../assets/images/TORY-BURCH-LAUREN-JUNE-AOE-960x500-_SX1024_.png'
import img21 from '../assets/images/WHOLE-FOODS-BANNER-AOE-960x500-_SX1024_.png'



import img28 from '../assets/images/71ZZBgvpNXL-_AC_SR255-340__FMwebp_.jpg'
import img29 from '../assets/images/61k4CryrRtL._AC_SR255,340__FMwebp_.webp'
import img30 from '../assets/images/61Z8rLU86QL-_AC_SR255-340__FMwebp_.jpg'
import img31 from '../assets/images/71mm3hVIXwL-_AC_SR255-340_.jpg'


import img34 from '../assets/images/REEBOK-JUNE-MELODY-GRID-900x1330.png'

import img35 from '../assets/images/Zappos_ONE_Retina-_SX650_.png'
import img36 from '../assets/images/Blank_500_x_500-491-_SX650_.png'
import img37 from '../assets/images/GGPromo-_SX650_.png'




function Popular() {
    return (
        <>
            <div>
                <div>

                    <h1 className="text-black text-3xl font-bold ml-8 mb-7" >Shop Popular Categories</h1>
                    <div className="grid grid-cols-6 gap-4 mx-10 align-middle mb-20">

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img1} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                            </div>
                            <a href="##" className='mx-auto hover:text-blue-700 hover:underline'>Sneaker & Athletic Shoes</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img4} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="##" className='mx-auto hover:text-blue-700 hover:underline'>HandBags</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img2} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="##" className='mx-auto hover:text-blue-700 hover:underline'>Lifestyle Sneakers</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img3} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="##" className='mx-auto hover:text-blue-700 hover:underline'>Athleisur Wear</a>
                        </div>

                       

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img5} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="##" className='mx-auto hover:text-blue-700 hover:underline'>Boots</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img6} alt="" srcSet="" className='w-24 mx-auto mix-blend-multiply' />
                            </div>
                            <a href="##" className='mx-auto hover:text-blue-700 hover:underline'>Coat  & Outerwear</a>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 mx-8 mb-20'>
                    <div>
                        <img src={img7} alt="" />
                        <div className='text-black mt-4 text-center '>
                            <h2 className='text-lg font-bold pb-4 '>Technical Running Clothing for Women</h2>
                            <p className='text-lg pb-3'>Take things up a notch with apparel made for your serious training seshes.</p>
                            <a href="##" className='text-sm block w-auto underline  underline-offset-4  mb-2 uppercase'>Shop Women's Running Clothing</a>
                        </div>
                    </div>
                    <div>
                        <img src={img8} alt="" />
                        <div className='text-black mt-4 text-center'>
                            <h2 className='text-lg font-bold pb-4 '>Move with On</h2>
                            <p className='text-lg pb-3'>Enjoy the flow of your routine with picks that promote effortless movement.</p>
                            <a href="##" className='text-sm block underline  underline-offset-4 uppercase'>Step On</a>
                        </div>
                    </div>
                    <div>
                        <img src={img9} alt="" />
                        <div className='text-black mt-4 text-center'>
                            <h2 className='text-lg font-bold pb-4 '>Casual Athletic Clothing for Women</h2>
                            <p className='text-lg pb-3'>Complement your busy lifestyle, yoga break, and travel plans with soft athleisure wear.</p>
                            <a href="#3" className='text-sm block underline  underline-offset-4 uppercase'>Shop Women's Casual</a>
                        </div>
                    </div>
                </div>

                <div className='flex mb-20 w-full '>
                    <div className='flex-1 text-center  p-10 my-auto h-auto'>
                        <h2 className='text-8xl font-bold mb-2'>NEW ARRIVALS</h2>
                        <p className='text-xl mb-4'>Transform your aesthetic with chic, ultra-trendy releases.</p>
                        <button className='text-black text-md underline py-2 px-4'>Shop New Sam Edelman</button>
                    </div>
                    <img src={img19} alt="" className="border flex-1 max-h-[80vh] " />
                </div>

                <div className='flex mb-20 w-full '>
                    <div className='flex-1 text-center  p-10 my-auto h-auto'>
                        <h2 className='text-2xl font-semibold mb-2'>For Fans of Steve Madden</h2>
                        <p className='text-xl mb-4'>Try cool and refreshing styles from this fan-favorite brand. </p>
                        <button className='text-black text-md underline py-2 px-4'>Shop Steve Madden</button>
                    </div>
                    <img src={img20} alt="" className="border flex-1 max-h-[67vh] " />
                </div>

                <div className='flex mb-20 w-full '>
                    <img src={img21} alt="" className="border flex-1 max-h-[67vh] " />
                    <div className='flex-1 text-center  p-10 my-auto h-auto'>
                        <h2 className='text-4xl font-semibold mb-2'>THE STYLE ROOM</h2>
                        <p className='text-xl mb-4'>Set the tone of your femininity with soft touches, rich botanicals, and graceful ruffles.</p>
                        <button className='text-black text-md underline py-2 px-4'>Shop Moody Romantic</button>
                    </div>
                </div>

                <div>
                    <h1 className="text-black text-3xl font-bold ml-5 mb-7" >Popular Items</h1>
                    <div className='grid grid-cols-4 gap-4 mx-7 mb-20'>

                        <div className="  text-md ">
                            <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                                <span className="bg-orange-700 text-white absolute left-0 top-0 px-2 py-0.5 rounded-br-lg flex gap-2 group">Best Seller</span>
                                <img src={img28} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                            </div>
                            <div className='mt-4 group'>
                                <div className="flex justify-start gap-2">
                                    <img src={img14} alt="" className="rounded-full border-black border-1" />
                                    <img src={img15} alt="" className="rounded-full border-black border-1" />
                                    <img src={img16} alt="" className="rounded-full border-black border-1" />
                                    <img src={img17} alt="" className="rounded-full border-black border-1" />
                                    <img src={img18} alt="" className="rounded-full border-black border-1" />
                                </div>
                                <div>
                                    <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                    <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                    <p className="text-green-800 font-bold">$94.95</p>
                                    <p>⭐⭐⭐⭐⭐<small>(4850)</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="  text-md ">
                            <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                                <img src={img29} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                            </div>
                            <div className='mt-4 group'>
                                <div className="flex justify-start gap-2">
                                    <img src={img14} alt="" className="rounded-full border-black border-1" />
                                    <img src={img15} alt="" className="rounded-full border-black border-1" />
                                    <img src={img16} alt="" className="rounded-full border-black border-1" />
                                    <img src={img17} alt="" className="rounded-full border-black border-1" />
                                    <img src={img18} alt="" className="rounded-full border-black border-1" />
                                </div>
                                <div>
                                    <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                    <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                    <p className="text-green-800 font-bold">$119.95</p>
                                    <p>⭐⭐⭐⭐⭐<small>(8454)</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="  text-md ">
                            <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                                <img src={img30} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                            </div>
                            <div className='mt-4 group'>
                                <div className="flex justify-start gap-2">
                                    <img src={img14} alt="" className="rounded-full border-black border-1" />
                                    <img src={img15} alt="" className="rounded-full border-black border-1" />
                                    <img src={img16} alt="" className="rounded-full border-black border-1" />
                                    <img src={img17} alt="" className="rounded-full border-black border-1" />
                                    <img src={img18} alt="" className="rounded-full border-black border-1" />
                                </div>
                                <div>
                                    <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                    <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                    <p className="text-green-800 font-bold">$94.95</p>
                                    <p>⭐⭐⭐⭐⭐<small>(48514)</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="  text-md ">
                            <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                                <img src={img31} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                            </div>
                            <div className='mt-4 group'>
                                <div className="flex justify-start gap-2">
                                    <img src={img14} alt="" className="rounded-full border-black border-1" />
                                    <img src={img15} alt="" className="rounded-full border-black border-1" />
                                    <img src={img16} alt="" className="rounded-full border-black border-1" />
                                    <img src={img17} alt="" className="rounded-full border-black border-1" />
                                    <img src={img18} alt="" className="rounded-full border-black border-1" />
                                </div>
                                <div>
                                    <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                    <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                    <p className="text-green-800 font-bold">$94.95</p>
                                    <p>⭐⭐⭐⭐⭐<small>(18278)</small></p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-4 mx-8'>
                    <div className='col-span-4 group'>
                        <div className='text-black text-center text-2xl font-semibold mb-4'>
                            <h1 className="my-3 ml-1">VIONIC: Freedom to Flex</h1>
                            <button className='border-black border-1 px-4 py-2.5 rounded-full text-sm font-semibold group-hover:bg-white group-hover:text-blue'>Shop VIONIC Selects</button>
                        </div>
                        <div className="">
                            <img src={img34} alt="tennis girl" className='' />
                        </div>
                    </div>
                    <div className='col-span-8 grid grid-cols-4 grid-rows-2 gap-3 mx-5 mb-20'>

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kirra li</small>
                                <p className="text-green-800 font-bold">$94.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kearny</small>
                                <p className="text-green-800 font-bold">$84.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kirra li</small>
                                <p className="text-green-800 font-bold">$44.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kearny</small>
                                <p className="text-green-800 font-bold">$45.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kearny</small>
                                <p className="text-green-800 font-bold">$84.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kirra li</small>
                                <p className="text-green-800 font-bold">$74.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img12} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kearny</small>
                                <p className="text-green-800 font-bold">$144.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /></span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img13} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>VIONIC</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Kearny</small>
                                <p className="text-green-800 font-bold">$244.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className='grid grid-cols-3 gap-4 mx-8 mb-20'>
                    <div>
                        <img src={img36} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            
                            <p className='text-lg pb-3'>Learn how to easily donate or recycle your secondhand items.</p>
                            <a href="##" className='text-sm block  underline  underline-offset-4 '>Explore Zappos For Good</a>
                        </div>
                    </div>
                    <div>
                        <img src={img35} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            
                            <p className='text-lg pb-3'>At Zappos, diversity, equity, inclusion, and individuality are central to our core values.</p>
                            <a href="##" className='text-sm block  w-auto underline  underline-offset-4  mb-2'>Learn More About Zappos One Purpose</a>
                        </div>
                    </div>
                    
                    <div>
                        <img src={img37} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            
                            <p className='text-lg pb-3'>We're highlighting brands who are making a difference and helping build a better place for us all.</p>
                            <a href="##" className='text-sm block  underline  underline-offset-4 '>Shop Goods For Good</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Popular