import React, { useState } from 'react';
import { logos } from './Data';
import logo111 from "../assets/images/bottom/logo1.1.png";
import logo112 from "../assets/images/bottom/logo1.2.png";



export default function Logos({ show }) {
    const [activeComponentRes, setActiveComponentRes] = useState(null);

    const [activeComponent, setActiveComponent] = useState(null);
    const [activeExtraLogo, setActiveExtraLogo] = useState(null); // State to track clicked extra logo
    const [activeBottomLogo, setActiveBottomLogo] = useState(null); // State to track clicked extra logo
    const [activeLeftLogo, setActiveLeftLogo] = useState(null); // State to track clicked extra logo


    const handleLogoClickRes = (component) => {
        setActiveComponentRes(activeComponentRes?.id === component.id ? null : component);

    };

    const handleLogoClick = (component) => {

        setActiveComponent(activeComponent?.id === component.id ? null : component);
        setActiveExtraLogo(null); // Reset extra logo popup when main logo is clicked
        // setActiveBottomLogo(null);
        setActiveBottomLogo(activeBottomLogo?.id === component.id ? null : component); // Set the clicked bottom logo
        setActiveLeftLogo(null);
        console.log("handleLogoClick");
    };

    const handleExtraLogoClick = (extraLogo) => {
        setActiveExtraLogo(activeExtraLogo?.id === extraLogo.id ? null : extraLogo); // Set the clicked extra logo

    };

    const handleBottomLogoClick = (extraLogo) => {
        setActiveBottomLogo(activeBottomLogo?.id === extraLogo.id ? null : extraLogo); // Set the clicked bottom logo
    };

    const handleLeftLogoClick = (extraLogo) => {
        setActiveLeftLogo(activeLeftLogo?.id === extraLogo.id ? null : extraLogo); // Set the clicked bottom logo
    };

    console.log("activeComponentRes", activeComponentRes);




    return (
        <>
            {/* logos */}
            {logos.map((data, index) => {
                const angle = (index * 360) / logos.length;

                const translateValue = window.innerWidth < 768 ? 130 : 180;

                // const transform = `rotate(${angle - 20}deg)  translate(180px) rotate(${-angle + 20}deg)`;
                const transform = `rotate(${angle - 20}deg) translate(${translateValue}px) rotate(${-angle + 20}deg)`;

                return (
                    <div
                        key={data.id}
                        className="absolute cursor-pointer"
                        style={{ transform }}
                    >
                        <div
                            className="hidden md:flex rounded-full  justify-center items-center text-white text-lg font-bold transition-all duration-300 hover:scale-110"
                            onClick={() => handleLogoClick(data)}
                        >
                            <img src={data.logo} alt={data.id} className="w-10 md:w-full  relative z-0" />
                        </div>

                        {/* responsive  */}
                        <div
                            className="flex md:hidden rounded-full justify-center items-center text-white text-lg font-bold transition-all duration-300 hover:scale-110"
                            onClick={() => handleLogoClickRes(data)}
                        >
                            <img src={data.logo} alt={data.id} className="w-10 md:w-full  relative z-0" />
                        </div>


                    </div>
                );
            })}

            {/* Popup for the active component */}
            {activeComponent && (
                <>
                    {activeComponent.id !== 9 && (
                        <div className={` absolute ${activeComponent.position} transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left transition-all duration-300 hover:scale-105 `}>
                            <h3 className="text-xs font-bold mb-1">{activeComponent.name}</h3>
                            <p className="text-[10px] text-gray-700" dangerouslySetInnerHTML={{ __html: activeComponent.description }} />

                            <button
                                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveComponent(null);
                                    setActiveBottomLogo(null);
                                    setActiveExtraLogo(null);
                                    setActiveLeftLogo(null);
                                }}
                            >
                                ×
                            </button>
                        </div>
                    )}

                    {/* Display the extra top logos if available */}
                    {activeComponent.type && activeComponent.type.top && (
                        <div className={`absolute ${activeComponent.position} transform -translate-x-1/2 z-20 w-[800px] p-4 rounded-lg text-left  transition-all duration-300 hover:scale-105`}>
                            <div className="mt-4 flex justify-center space-x-2 md:space-x-4">
                                {activeComponent.type.top.map((extraLogo) => (
                                    <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                        <div className="rounded-full flex justify-center items-center">
                                            <img
                                                src={extraLogo.logo}
                                                alt={extraLogo.id}
                                                onClick={() => handleExtraLogoClick(extraLogo)} // Handle click on extra logo
                                                className='w-6 md:w-full'
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Display the bottom extra logos if available */}
                    {activeComponent.type && activeComponent.type.bottom && (
                        <div className={`absolute ${activeComponent.position} transform -translate-x-1/2 z-10 w-[600px] p-4 rounded-lg text-left  transition-all duration-300 hover:scale-105`}>
                            <div className="mt-4 flex justify-between space-x-4">
                                {activeComponent.type.bottom.map((extraLogo) => (
                                    <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                        <div className="rounded-full flex justify-center items-center">
                                            <img
                                                src={extraLogo.logo}
                                                alt={extraLogo.id}
                                                onClick={() => handleBottomLogoClick(extraLogo)} // Handle click on bottom logo
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Display the bottom extra logos if available */}
                    {activeComponent.type && activeComponent.type.left && (
                        <div className={`absolute ${activeComponent.position} transform -translate-x-1/2 z-10 w-[450px] p-4 rounded-lg text-left  transition-all duration-300 hover:scale-105`}>
                            <div className="mt-60 flex flex-col gap-10 space-x-4">
                                {activeComponent.type.left.map((extraLogo) => (
                                    <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                        <div className="rounded-full flex ">
                                            <img
                                                src={extraLogo.logo}
                                                alt={extraLogo.id}
                                                onClick={() => handleLeftLogoClick(extraLogo)} // Handle click on bottom logo
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                </>
            )}


            {/* Popup for the clicked extra logo */}
            {activeExtraLogo && (
                <div className={`absolute ${activeExtraLogo.position} transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>
                    <h3 className="text-xs font-bold mb-1">{activeExtraLogo.name}</h3>
                    <p className="text-[10px] text-gray-700" dangerouslySetInnerHTML={{ __html: activeExtraLogo.description }} />

                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveExtraLogo(null); // Close the extra logo popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Popup for the clicked bottom logo */}
            {activeBottomLogo && activeBottomLogo.id === 41 && (
                <div className={`absolute -bottom-[200px] -left-[450px] transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>


                    <div className='flex gap-6 text-[10px]'>
                        <div>
                            <img src={logo112} alt="bottom1" className='w-8' />
                        </div>

                        <div>
                            <p className=" text-gray-700">Physical Representation</p>
                            <p className=" text-gray-700">Listed ICO Public Coin</p>
                        </div>
                    </div>

                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveBottomLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {activeBottomLogo && activeBottomLogo.id === 41 && (
                <div className={`absolute -bottom-[300px] -left-[450px] transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>
                    <div className='flex gap-6 text-[10px]'>
                        <div>
                            <img src={logo111} alt="bottom1" className='w-8' />
                        </div>

                        <div>
                            <p className=" text-gray-700">Physical Representation</p>
                            <p className=" text-gray-700">Listed ICO Public Coin</p>
                        </div>
                    </div>
                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveBottomLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {activeBottomLogo && activeBottomLogo.id === 41 && (
                <div className={`absolute -bottom-[420px] -left-40 transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>
                    <h3 className="text-xs font-bold mb-1">Priv8Pay</h3>
                    <p className="text-[10px] text-gray-700 my-1">Secure Crypto Wallet</p>
                    <p className="text-[10px] text-gray-700">Private digital payment blockchain  solution that combines the security of a  leading crypto blockchains, wallets and  with the convenience of cryptocurrency  exchange services inbuilt.</p>

                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveBottomLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>



                </div>
            )}

            {activeBottomLogo && activeBottomLogo.id === 42 && (
                <div className={`absolute -bottom-[400px] left-[550px] transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>
                    <h3 className="text-xs font-bold mb-1">OnTheSpot</h3>
                    <p className="text-[10px] text-gray-700 my-1">Advanced Tap to Pay</p>
                    <p className="text-[10px] text-gray-700">Payments for everyone. Android  based tap- to- pay solution  leveraging the phones inbuilt NFC  to not only make payments, but to  take payments. Run your business  with easy without the addition  devices such as square. Designed  specifically for Fiat and crypto  payments on mobile devices.</p>
                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveBottomLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}


            {/* Popup for the clicked left logo */}

            {activeLeftLogo && activeLeftLogo.id === 21 && (
                <div className={`absolute -bottom-[220px] left-[550px] transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>
                    <h3 className="text-xs font-bold mb-1">{activeLeftLogo.name}</h3>
                    <p className="text-[10px] text-gray-700" dangerouslySetInnerHTML={{ __html: activeLeftLogo.description }} />
                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveLeftLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {activeLeftLogo && activeLeftLogo.id === 22 && (
                <div className={`absolute -bottom-[220px] left-[550px] transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>
                    <h3 className="text-xs font-bold mb-1">{activeLeftLogo.name}</h3>
                    <p className="text-[10px] text-gray-700" dangerouslySetInnerHTML={{ __html: activeLeftLogo.description }} />
                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveLeftLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {activeLeftLogo && activeLeftLogo.id === 23 && (
                <div className={`absolute -bottom-[320px] left-[550px]  transform -translate-x-1/2 z-20 w-72 bg-gray-200 p-4 rounded-lg shadow-lg text-left  transition-all duration-300 hover:scale-105`}>
                    <h3 className="text-xs font-bold mb-1">{activeLeftLogo.name}</h3>
                    <p className="text-[10px] text-gray-700" dangerouslySetInnerHTML={{ __html: activeLeftLogo.description }} />
                    <button
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveLeftLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}




            {/* Popup for the clicked Responsive logo */}

            {activeComponentRes && (
                <>

                    <div
                        className="fixed top-0 left-0 w-full h-full px-8 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    >
                        <div
                            className="w-[300px] h-3/4 relative bg-gray-200 p-6 rounded-3xl shadow-lg"
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveComponentRes(null);
                                } // Close the popup
                                } // Prevents closing the modal when clicking inside the modal
                            >
                                X
                            </button>

                            <div>

                                <img
                                    src={activeComponentRes?.logo}
                                    alt={activeComponentRes?.id}
                                    className="mx-auto mb-4"
                                />

                            </div>

                            <div>
                                <h2 className="text-sm mb-2 font-bold  ">{activeComponentRes?.name}</h2>
                                <p className="text-xs text-gray-700" dangerouslySetInnerHTML={{ __html: activeComponentRes?.description }} />
                            </div>

                        </div>
                    </div>


                </>
            )}






            {/* top header  */}



            {/* res top logos */}
            {show && logos.filter((data) => data.id === 9).map((data) => (
                <>
                    {/* Display the extra top logos if available */}
                    <div className={`block md:hidden absolute ${data.position} transform -translate-x-1/2 z-20 w-[800px] p-4 rounded-lg text-left transition-all duration-300 hover:scale-105`}>
                        <div className="mt-4 flex justify-center space-x-2 md:space-x-4">
                            {data.type.top.map((extraLogo) => (
                                <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                    <div className="rounded-full flex justify-center items-center">
                                        <img
                                            src={extraLogo.logo}
                                            alt={extraLogo.id}
                                            onClick={() => handleLogoClickRes(extraLogo)} // Handle click on extra logo
                                            className="w-6 md:w-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ))}


            {/* res left logos */}
            {show && logos.filter((data) => data.id === 2).map((data) => (
                <>
                    {/* Display the extra top logos if available */}

                    <div className={`block md:hidden absolute ${data.position} transform -translate-x-1/2 z-10 w-[100px] p-4 rounded-lg text-left  transition-all duration-300 hover:scale-105`}>
                        <div className="flex flex-col gap-5 ">
                            {data.type.left.map((extraLogo) => (
                                <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                    <div className="rounded-full flex ">
                                        <img
                                            src={extraLogo.logo}
                                            alt={extraLogo.id}
                                            onClick={() => handleLogoClickRes(extraLogo)} // Handle click on extra logo

                                            className='w-6 h-6 object-contain'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </>
            ))}


            {/* res left logos */}
            {show && logos.filter((data) => data.id === 4).map((data) => (
                <>
                    {/* Display the extra top logos if available */}

                    <div className={`block md:hidden absolute ${data.position} transform -translate-x-1/2 z-10 w-[180px] p-4 rounded-lg text-left  transition-all duration-300 hover:scale-105`}>
                        <div className="mt-4 flex justify-between space-x-4">
                            {data.type.bottom.map((extraLogo) => (
                                <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                    <div className="rounded-full flex justify-center items-center">
                                        <img
                                            src={extraLogo.logo}
                                            alt={extraLogo.id}
                                            onClick={() => handleLogoClickRes(extraLogo)} // Handle click on extra logo
                                            className='w-8'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                </>
            ))}





        </>
    );
}
