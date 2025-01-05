import React from 'react'


interface DataProps{
    id: number;
    name:string;
    type:string;
    available:boolean;
}

const ServerSide = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const parsedResponse:DataProps[] = await response.json();
    // console.log(parsedResponse, '==> response')





    return (
        <section className='w-full h-fit place-items-center gap-y-[50px] py-[40px] grid grid-cols-3 grid-flow-row'>
            {
                parsedResponse.map((data) => (
                    <div key={data.id} className='w-[250px] h-[400px] rounded-[18px] flex flex-col items-center p-2 shadow-[0_0_20px_#aaa]'>
                        <div style={{ backgroundImage:`url ('/${data.id}.jpg')`}}  className='w-full h-[280px] bg-[#f1f1f1] rounded-[14px] bg-no-repeat bg-center bg-contain'>

                        </div>
                        <div className='w-full px-[10px] py-[8px] flex flex-col items-start gap-[10px]'>
                            <h1 className='text-xl '>{data.name}</h1>
                            <span className='py-[8px] px-[20px] bg-blue-100 rounded-[50px] flex items-center justify-center text-[14px] font-bold '>{data.type}</span>
                            
                            {data.available?<p className='text-green-600 text-md font-bold'>Available</p>:<p className='text-red-600 text-md font-bold'>Not-Available</p>}
                        </div>
                    </div>
                )

                )
            }

        </section>
    )
}

export default ServerSide;
