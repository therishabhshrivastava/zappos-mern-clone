import img1 from '../assets/zapposPBS-_CB1509642213_.svg';
import { IoSearchOutline } from "react-icons/io5";
import Button from './Button';
import { Link } from 'react-router-dom';



function SearchTab() {



    return (
        <>
            <div className='flex  h-24 mx-auto text-md '>
                <div className='px-6 py-2 my-auto'>
                    <Link to={'/'}><img src={img1} alt="zappos" className='h-12 inline align-middle text-white' /></Link>
                </div>
                <div className=' flex my-auto border-2 border-black rounded-full font-verdana mx-3.5 overflow-hidden'>
                    <IoSearchOutline className='icon w-5 mx-3 my-auto text-gray-500' />
                    <input type="text" placeholder='Search for shoes, clothes...' className='bg-transparent rounded-full outline-none  mr-12 pr-48 text-lg' />
                    <div className="h-11 w-0.5 bg-black"></div>
                    <Button title={'SEARCH'} color={'black'} height={'100%'} fontWeight="700" width="110px" padding="9px 0" className=" rounded-r-lg" />
                </div>
                
             
            </div>
        </>
    )
}
export default SearchTab