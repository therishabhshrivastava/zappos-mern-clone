import { BsFillCaretUpFill } from 'react-icons/bs';
import { Disclosure } from '@headlessui/react';
import DummyShopItems from './DummyShopItems';

function ShopItems() {
    const sizes = ['2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14', '14.5', '15', '15.5', '16', '16.5', '17', '17.5', '18', '18.5', '19', '19.5', '20'];
    const widths = ['N', 'M', 'W', 'WW', '2A', 'B', 'C', 'D', 'E', 'EE', '3E', '4E', '5E', '6E', '9E'];

    return (
        <>
            <div className='my-4 '>
                <div className="flex justify-between mx-10">
                    <h1 className="text-3xl font-bold">Men's Size 2 Sneakers & Athletic Shoes</h1>
                    <div className=" flex gap-2 text-right">
                        <small className="my-auto">Sort By</small>
                        <select className="my-2 rounded-md w-44 py-2 pl-3 border-1 border-gray-300">
                            <option value="">RELEVANCE</option>
                            <option value="new arrivals">NEW ARRIVALS</option>
                            <option value="customer rating">Customer Ratings</option>
                            <option value="best sellers">Best Sellers</option>
                            <option value="Brand Name"></option>
                        </select>

                    </div>
                </div>
                <div className="ml-10">
                    <p className="text-black">12345 items found</p>
                    <small className="text-sky-800">Find what you're looking for?</small>
                </div>

                <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-1 mx-6">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Men's Size</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-700 px-2 text-center mb-5">
                                        <div className=' border-t-1 mt-2 pl-2 h-40 overflow-scroll overflow-x-hidden scroll'>
                                            <div className="grid grid-cols-4 gap-2 my-2">
                                                {sizes.map(size => {
                                                    return (
                                                        <div key={size} className=' border-1 rounded-sm flex items-center h-8 w-8 hover:border-black hover:border-1 hover:text-sky-600'>
                                                            <p className=" mx-auto ">{size}</p>
                                                        </div>
                                                    );
                                                })}


                                            </div>
                                        </div>

                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Men's Width</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-700 px-2 text-center mb-5">
                                        <div className=' border-t-1 mt-2 pl-2 h-40 overflow-scroll overflow-x-hidden'>
                                            <div className="grid grid-cols-4 gap-2 my-2">
                                                {widths.map(width => {
                                                    return (
                                                        <div className=' border-1 rounded-sm flex items-center h-8 w-8 hover:border-black hover:border-1 hover:text-sky-600' key={width}>
                                                            <p className=" mx-auto ">{width}</p>
                                                        </div>
                                                    );
                                                })}


                                            </div>
                                        </div>

                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Subcategory</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Brand</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Price</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Color</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Features</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Shoe Weight</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Closures</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Accents</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                        <h3 className="capitalize ">Accents</h3>
                                        <BsFillCaretUpFill
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-3 text-gray-500 `}
                                        />
                                    </Disclosure.Button>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div className="col-span-4 mx-4">
                        <div className="text-xl text-gray-900">Single Shoes</div>
                        <div>tabs</div>
                        <div className="grid grid-cols-4 gap-4 gap-y-6">

                           
                            <DummyShopItems />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default ShopItems