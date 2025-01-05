'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";



interface ITodo {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };


}
const ClientSide = () => {
    const [data, setData] = useState < ITodo[] > ([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ${response.status}');
                }
                const parsedResponse: ITodo[] = await response.json();
                setData(parsedResponse);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();

    }, [])





    return (
        <section className='w-full h-screen  place-items-center px-[36px] grid gap-y-[64px] py-[64px] grid-cols-3 grid-flow-row' >
            {isLoading ? <div className='w-full h-screen bg-[#f5f5f5] bg-[url("/loader.gif")] bg-[length:500px_300px] bg-no-repeat bg-center absolute z-10'></div> :

                data ? data.map((product) => (
                    <div key={product.id} className='w-[330px] h-[580p] rounded-[40px] flex flex-col bg-white items-center justify-start cursor-pointer'>
                        {isLoading && (
                            <div className='absolute inset-0 flex justify-center items-center bg-gray-200 opacity-75 z-10'>
                                <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
                            </div>
                        )}
                        <div className='w-full min-h-[300px] relative'>
                            <Image src={product.image} alt='product' layout='fill' className='absolute object-center object-contain'></Image>
                        </div>
                        <div className='flex flex-col w-full items-start gap-[12px] justify-start px-[25px] pb-[35px] pt-[25px]'>
                            <h2 className='montserrat-bold h-[48px] line-clamp-2 text-black text-base xxl:text-[22px]'>{product.title}</h2>
                            <p className='montserrat-regular line-clamp-3 text-secondaryCol text-sm xxl:text-xl'>{product.description}</p>
                            <div className='flex items-center gap-[5px]'>
                                <p className='text-black montserrat-bold text-base xxl:text-[22px]'>${product.price}</p>
                            </div>
                            <span className='text-black montserrat-medium text-sm rounded-[14px] py-[6px] px-[14px] text-center bg-green-100'>{product.category}</span>
                            <div className='flex items-center gap-[6px]'>
                                <p className='text-black montserrat-regular text-sm flex items-center'>{product.rating.rate} 
                                    <FaStar></FaStar></p>
                                <p className='text-black montserrat-regular text-sm'>({product.rating.count})</p>
                                
                            </div>
                        </div>

                    </ div>
                )

                ) : ""

            }

        </section >
    )
}

export default ClientSide;
