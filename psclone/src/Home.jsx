import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import App from './App';

import { createContext } from 'react'
export const ImageContext=createContext();

// const ImageProvider = ({ children }) => {
//     <input
//         id="picture"
//         accept="image/jpg, image/jpeg, image/png"
//         type="file"
//         className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
//         onChange={(e) => {
//             if (e.target.files && e.target.files.length > 0) {
//                 setFiles(e.target.files);
//             }
//             else if (e.target.files.length === 0) {
//                 alert('File is not selected!');
//             }
//         }}
//         required="required"

//     />
//     return(
//         <ImageContext.Provider value={file}>
//             {children}
//         </ImageContext.Provider>
//     )

// }
export default function CtaOne() {
    const navigate = useNavigate();
    const [files, setFiles] = useState();
    const [previews, setPreviews] = useState();
    // const ImageProvider = ({ children }) => {
    //     <input
    //         id="picture"
    //         accept="image/jpg, image/jpeg, image/png"
    //         type="file"
    //         className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
    //         onChange={(e) => {
    //             if (e.target.files && e.target.files.length > 0) {
    //                 setFiles(e.target.files);
    //             }
    //             else if (e.target.files.length === 0) {
    //                 alert('File is not selected!');
    //             }
    //         }}
    //         required="required"
    
    //     />
    //     return(
    //         <ImageContext.Provider value={file}>
    //             {children}
    //         </ImageContext.Provider>
    //     )
    
    // }
    

    function handleUpload() {
        if (!files) {
            alert('No file Selected');
            return;
        }
        else {
            navigate("edit")
        }
    }
    useEffect(() => {
        if (!files) return;
        let tmp = [];
        for (let i = 0; i < files.length; i++) {
            tmp.push(URL.createObjectURL(files[i]));
        }
        const objectUrls = tmp;
        setPreviews(objectUrls);

        // free memory
        for (let i = 0; i < objectUrls.length; i++) {
            return () => {
                URL.revokeObjectURL(objectUrls[i]);
            };
        }
    }, [files]);


    return (
        <>
            <section className="bg-gradient-to-r from-red-800 to-blue-800 w-full mb-auto">
                <div>
                    <Navbar />
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 mb-auto">
                    <div className="flex flex-col items-center justify-center mx-auto w-full text-center md:max-w-2xl">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Edit All Your Photos with Ease
                        </h2>
                        <p className="mx-auto mt-4 text-base leading-relaxed text-white w-full">
                            "Enhance your photos effortlessly with our online editor. Upload, adjust brightness, contrast, and saturation, and download your edited images instantly. Experience professional-grade editing with a user-friendly interface. Try it now and make every picture perfect!"
                        </p>
                        <div className="gap-8 sm:flex-row sm:justify-center mt-16 mb-10">
                            <label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 justify-items-start">Select & Upload your Picture Here</label>
                            <input

                                id="picture"
                                accept="image/jpg, image/jpeg, image/png"
                                type="file"
                                className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setFiles(e.target.files);
                                    }
                                    else if (e.target.files.length === 0) {
                                        alert('File is not selected!');
                                    }
                                }}
                                required="required"

                            />
                            

                        </div>
                        {previews &&
                            previews.map((pic) => {
                                return <img src={pic} width={250} className="flex mt-4 items-center justify-center" />;
                            })}
                        <button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mt-8 mb-auto"
                            onClick={handleUpload}
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
