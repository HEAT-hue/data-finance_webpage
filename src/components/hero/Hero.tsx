// jshint esversion:6
import Typed from 'react-typed';

function Hero() {
    return (

        <div className="text-white">
            <div className="w-full h-screen max-w-[800px] mx-auto mt-[-96px] px-4 text-center flex flex-col justify-center items-center">
                <p className="uppercase text-[#00df9a] font-bold p-2">Growing with data analytics</p>
                <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6">Grow with data.</h1>
                <div className='flex justify-center items-center gap-2'>
                    <p className="font-bold py-4 text-xl sm:text-4xl md:text-5xl">Fast, flexible financing for </p>
                    <Typed
                        className='font-bold py-4 text-xl sm:text-4xl md:text-5xl'
                        strings={['BTB', "BTC", "SASS"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />

                </div>
                <p className='text-xl font-bold text-gray-500 md:text-2xl' >Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#00df9a] py-2.5 px-12 text-[#333333] font-bold cursor-pointer mt-4 rounded-md'>Get Started</button>
            </div>

        </div>
    );
}

export { Hero };