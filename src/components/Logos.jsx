import React, { useState } from 'react';
import { logos } from './Data';

export default function Logos() {
    const [activeComponent, setActiveComponent] = useState(null);
    const [activeExtraLogo, setActiveExtraLogo] = useState(null); // State to track clicked extra logo
    const [activeBottomLogo, setActiveBottomLogo] = useState(null); // State to track clicked extra logo
    const [activeLeftLogo, setActiveLeftLogo] = useState(null); // State to track clicked extra logo

    const handleLogoClick = (component) => {

        setActiveComponent(activeComponent?.id === component.id ? null : component);
        setActiveExtraLogo(null); // Reset extra logo popup when main logo is clicked
        // setActiveBottomLogo(null);
        setActiveBottomLogo(activeBottomLogo?.id === component.id ? null : component); // Set the clicked bottom logo
        setActiveLeftLogo(null);
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

    console.log(activeExtraLogo);
    console.log(activeBottomLogo);

    return (
        <>
            {/* logos */}
            {logos.map((data, index) => {
                const angle = (index * 360) / logos.length;
                const transform = `rotate(${angle - 20}deg) translate(350px) rotate(${-angle + 20}deg)`;

                return (
                    <div
                        key={data.id}
                        className="absolute cursor-pointer"
                        style={{ transform }}
                    >
                        <div
                            className="rounded-full flex justify-center items-center text-white text-lg font-bold transition-all duration-300 hover:scale-110"
                            onClick={() => handleLogoClick(data)}
                        >
                            <img src={data.logo} alt={data.id} className="relative z-0" />
                        </div>
                    </div>
                );
            })}

            {/* Popup for the active component */}
            {activeComponent && (
                <>
                    {activeComponent.id !== 9 && (
                        <div className={`absolute ${activeComponent.position} transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                            <h3 className="text-lg font-bold mb-1">{activeComponent.name}</h3>
                            <p className="text-sm text-gray-700">{activeComponent.description}</p>
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                        <div className={`absolute ${activeComponent.position} transform -translate-x-1/2 z-20 w-[800px] p-4 rounded-lg text-left`}>
                            <div className="mt-4 flex justify-center space-x-4">
                                {activeComponent.type.top.map((extraLogo) => (
                                    <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                        <div className="rounded-full flex justify-center items-center">
                                            <img
                                                src={extraLogo.logo}
                                                alt={extraLogo.id}
                                                className="w-16 h-16"
                                                onClick={() => handleExtraLogoClick(extraLogo)} // Handle click on extra logo
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Display the bottom extra logos if available */}
                    {activeComponent.type && activeComponent.type.bottom && (
                        <div className={`absolute ${activeComponent.position} transform -translate-x-1/2 z-10 w-[800px] p-4 rounded-lg text-left`}>
                            <div className="mt-4 flex justify-between space-x-4">
                                {activeComponent.type.bottom.map((extraLogo) => (
                                    <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                        <div className="rounded-full flex justify-center items-center">
                                            <img
                                                src={extraLogo.logo}
                                                alt={extraLogo.id}
                                                className="w-16 h-16"
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
                        <div className={`absolute ${activeComponent.position} transform -translate-x-1/2 z-10 w-[600px] p-4 rounded-lg text-left`}>
                            <div className="mt-36 flex flex-col gap-10 space-x-4">
                                {activeComponent.type.left.map((extraLogo) => (
                                    <div key={extraLogo.id} className="flex-shrink-0 cursor-pointer">
                                        <div className="rounded-full flex ">
                                            <img
                                                src={extraLogo.logo}
                                                alt={extraLogo.id}
                                                className="w-16 h-16"
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
                <div className={`absolute ${activeExtraLogo.position} transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeExtraLogo.name}</h3>
                    <p className="text-sm text-gray-700">{activeExtraLogo.description}</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveExtraLogo(null); // Close the extra logo popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Popup for the clicked extra logo */}
            {activeExtraLogo && (
                <div className={`absolute ${activeExtraLogo.position} transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeExtraLogo.name}</h3>
                    <p className="text-sm text-gray-700">{activeExtraLogo.description}</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                <div className={`absolute -bottom-[400px] -left-[500px] transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeBottomLogo.name}</h3>
                    <p className="text-sm text-gray-700">This is the custom popup for Spectrum logo.</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                <div className={`absolute -bottom-[550px] -left-[500px] transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeBottomLogo.name}</h3>
                    <p className="text-sm text-gray-700">This is a different popup for another bottom logo.</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                <div className={`absolute -bottom-[650px] -left-40 transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeBottomLogo.name}</h3>
                    <p className="text-sm text-gray-700">This is yet another different popup for another bottom logo.</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                <div className={`absolute -bottom-[550px] left-[550px] transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeBottomLogo.name}</h3>
                    <p className="text-sm text-gray-700">This is yet another different popup for another bottom logo.</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveBottomLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}


            {activeLeftLogo && activeLeftLogo.id === 21 && (
                <div className={`absolute -bottom-[100px] left-[850px] transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeLeftLogo.name}</h3>
                    <p className="text-sm text-gray-700">This is yet another different popup for another bottom logo.</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                <div className={`absolute -bottom-[200px] left-[850px] transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeLeftLogo.name}</h3>
                    <p className="text-sm text-gray-700">This is yet another different popup for another bottom logo.</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                <div className={`absolute -bottom-[300px] left-[850px]  transform -translate-x-1/2 z-20 w-64 bg-gray-200 p-4 rounded-lg shadow-lg text-left`}>
                    <h3 className="text-lg font-bold mb-1">{activeLeftLogo.name}</h3>
                    <p className="text-sm text-gray-700">This is yet another different popup for another bottom logo.</p>
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveLeftLogo(null); // Close the popup
                        }}
                    >
                        ×
                    </button>
                </div>
            )}



        </>
    );
}
