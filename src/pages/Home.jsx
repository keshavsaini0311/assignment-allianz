/* eslint-disable no-unused-vars */
import React from 'react'
import { FaChartArea,FaChartBar,FaChartLine } from 'react-icons/fa';

export default function Home() {
  return (
    <>
    <div  className="container lg:grid-rows-1 lg:grid-cols-2 grid m-auto bg-gradient-to-r from-gray-700 to-gray-900 relative min-h-fit pb-12 mt-0 ">
      <div className="mt-12 md:mt-24 tile lg:row-start-1 lg:col-span-1  p-4">
        <div className="ml-4 gap-3 p-3">
            <h1 className="p-3 mx-auto uppercase text-center text-3xl lg:text-4xl text-white font-extrabold tracking-tight">One stop solution to test your Strategy ideas</h1>
            <p className="p-3 mx-auto  text-l md:text-2xl text-white font-bold tracking-tight">As we are launching a Beta soon, we are giving away 1 month FREE subscription to our early backers. Sign up below to get FREE subscription.</p>
        </div>
        <div className="ml-4 gap-3 p-3">

        <button className=" mx-3 p-3  rounded-lg bg-slate-900 hover:scale-105 hover:shadow-md hover:shadow-neutral-400 text-white text-2xl">Sign Up</button>
        <button className="mx-3 p-3  rounded-lg bg-slate-900 hover:scale-105 hover:shadow-md hover:shadow-neutral-400 text-white text-2xl">Login</button>
        </div>
        <div className="ml-4 mt-4 gap-2 p-3 text-white flex flex-col sm:flex-row">
            <span className='mx-3 p-3 bg-gray-600 rounded-lg bg-opacity-30'><span  className='text-green-500'>&#x2713;  </span>Free 30-day subscription</span>
            <span className='mx-3 p-3 bg-gray-600 rounded-lg bg-opacity-30'><span  className='text-green-500'>&#x2713;  </span>No credit card needed</span>
        </div>

      </div>
      <div className="mt-12 lg:mt-24 tile lg:row-start-1 lg:col-span-1  mx-auto p-4 ">
        <img src="src/assets/img/home.png" alt="" className='h-64 sm:h-96 fade-in-image '/>
      </div>
    </div>
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 max-h-screen">
        <div className="text-center">
            <h1 className="p-3 mx-auto text-center text-3xl lg:text-4xl text-white font-bold tracking-tight">Excellent Features. Excellent Results</h1>
            <p className='p-3 mx-auto  text-l md:text-2xl text-white  tracking-tight'>Start working with Unfluke to manage all your strategies</p>
        </div>
        <div  className="container lg:grid-rows-1 lg:grid-cols-2 grid m-auto bg-gradient-to-r from-gray-700 to-gray-900 max-h-screen  ">
      <div className="mt-6 lg:mt-20 tile lg:row-start-1 lg:col-span-1  mx-auto p-4 transform transition-all ease-in duration-1000 ">
        <img src="src/assets/img/home2.jpg" alt="" className='h-64 md:h-96 fade-in-image sm:ml-5 rounded-3xl'/>
      </div>
      <div className="mb-96 sm:mt-36 p-4">
        <div className="ml-4  text-white">
            <h1 className="p-3 mx-auto uppercase text-center text-xl lg:text-2xl text-white font-extrabold tracking-tight">HISTORICAL INTRADAY CHARTS</h1>
            <div className="">
                <div className="mt-7">
                    <span className='flex gap-3'>

                    <FaChartArea size={30} className='text-green-500'/>
                    <h1 className='sm:text-xl text-l'>Different Segement Charts</h1>
                    </span>
                    <p className='p-3 ml-3'>Get historical intraday charts of Equity, Futures and Options.</p>
                </div>
                <div className="mt-7">
                    <span className='flex gap-3'>

                    <FaChartLine size={30} className='text-green-500'/>
                    <h1 className='sm:text-xl text-l'>Data Since 2017</h1>
                    </span>
                </div>
            </div>
        </div>
        

      </div>
    </div>
    </div>
    <hr className="" />
    <div  className="container lg:grid-rows-1 lg:grid-cols-2 grid m-auto bg-gradient-to-r from-gray-700 to-gray-900 relative min-h-fit  mt-0 ">
      <div className="mt-6 md:mt-36 tile lg:row-start-1 lg:col-span-1  p-4">
        
      <div className="ml-4  text-white">
            <h1 className="p-3 mx-auto uppercase text-center text-xl lg:text-2xl text-white font-extrabold tracking-tight">HISTORICAL INTRADAY CHARTS</h1>
            <div className="">
                <div className="mt-7">
                    <span className='flex gap-3'>

                    <FaChartArea size={30} className='text-green-500'/>
                    <h1 className='sm:text-xl text-l'>Different Segement Scanner</h1>
                    </span>
                    <p className='p-3 ml-3'>Check scanner results using a combination of different indicators and time frames.</p>
                </div>
                <div className="mt-7">
                    <span className='flex gap-3'>

                    <FaChartLine size={30} className='text-green-500'/>
                    <h1 className='sm:text-xl text-l'>Data Since 2017 For FNO</h1>
                    </span>
                </div>
            </div>
        </div>
      </div>
      <div className="pb-10 mt-6 lg:mt-36 tile lg:row-start-1 lg:col-span-1 mr-2 mx-auto p-4 ">
        <img src="src/assets/img/home3.jpg" alt="" className=' h-64 sm:h-96 fade-in-image rounded-3xl '/>
      </div>
    </div>
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 ">
        <div  className="container lg:grid-rows-1 lg:grid-cols-2 grid m-auto   ">
      <div className="mt-6 lg:mt-20 tile lg:row-start-1 lg:col-span-1  mx-auto p-4 transform transition-all ease-in duration-1000 ">
        <img src="src/assets/img/home4.jpg" alt="" className='h-64 md:h-96 fade-in-image sm:ml-5 rounded-3xl'/>
      </div>
      <div className="sm:mb-64 sm:mt-36 p-4">
        <div className="ml-4  text-white">
            <h1 className="p-3 sm:mt-24 mx-auto uppercase text-center text-xl lg:text-4xl text-white font-extrabold tracking-tight">BACKTEST STRATEGIES</h1>
            
        </div>
        

      </div>
    </div>
    </div>
    <div  className="container lg:grid-rows-1 lg:grid-cols-2 grid m-auto bg-gradient-to-r from-gray-700 to-gray-900 relative min-h-fit  mt-0 ">
      <div className="mt-6 md:mt-24 tile lg:row-start-1 lg:col-span-1  p-4">
        
      <div className="ml-4  text-white">
            <h1 className="p-3 sm:mt-24 mx-auto uppercase text-center text-xl lg:text-4xl text-white font-extrabold tracking-tight">ADVANCE BACKTEST STRATEGIES</h1>
            
        </div>
      </div>
      <div className="pb-10 mt-6 lg:mt-24 tile lg:row-start-1 lg:col-span-1 mr-2 mx-auto p-4 ">
        <img src="src/assets/img/home5.png" alt="" className=' h-64 sm:h-96 fade-in-image rounded-3xl '/>
      </div>
    </div>
    <div  className="container grid m-auto bg-gradient-to-r from-gray-700 to-gray-900 relative min-h-fit  mt-0 ">
        <h1 className="p-3 sm:mt-24 mx-auto text-center text-xl lg:text-4xl text-white font-extrabold tracking-tight">In Parternship with</h1>
    </div>
    </>
  )
}
