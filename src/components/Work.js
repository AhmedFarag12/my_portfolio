import React from 'react'
import PizzaImg from '../assets/pizza.jpg'
import Order from '../assets/order.png'
import Hospital from '../assets/hospital.jpg'
import Reservation from '../assets/Reservation.png'
import Api from '../assets/api.png'
import Livewire from '../assets/livewire.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>Work</p>
          <p className='py-6'>// Check out some of my work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
         <div style={{backgroundImage:`url(${PizzaImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
            {/*Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>

              <span className='text-2xl font-bold text-white tracking-wider'>
                  React App

              </span>
              <div className='pt-8 text-center'>
                  <a href="https://ahmedfarag12.github.io/resturant-app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>

                  <a href="https://github.com/AhmedFarag12/resturant-app">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
              </div>
            </div>

            
          </div>
          <div style={{backgroundImage:`url(${Livewire})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>

             <span className='text-2xl font-bold text-white tracking-wider'>
                 Laravel Crud Livewire

             </span>
             <div className='pt-8 text-center'>
             

                 <a href="https://github.com/AhmedFarag12/crud_livewire">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                 </a>
             </div>
           </div>

           
         </div>
         <div style={{backgroundImage:`url(${Order})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>

             <span className='text-2xl font-bold text-white tracking-wider'>
                 Laravel Order App

             </span>
             <div className='pt-8 text-center'>
                

                 <a href="https://github.com/AhmedFarag12/pizza-order-laravel">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                 </a>
             </div>
           </div>

           
         </div>
         <div style={{backgroundImage:`url(${Hospital})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>

             <span className='text-2xl font-bold text-white tracking-wider'>
                 Laravel Hospital App

             </span>
             <div className='pt-8 text-center'>
               

                 <a href="https://github.com/AhmedFarag12/Hospital-App-Laravel">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                 </a>
             </div>
           </div>

           
         </div>
         <div style={{backgroundImage:`url(${Reservation})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>

             <span className='text-2xl font-bold text-white tracking-wider'>
                 Reservation PHP App

             </span>
             <div className='pt-8 text-center'>
                

                 <a href="https://github.com/AhmedFarag12/Hospital-reservation-system-PHP-">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                 </a>
             </div>
           </div>

           
         </div>
         <div style={{backgroundImage:`url(${Api})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/*Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>

             <span className='text-2xl font-bold text-white tracking-wider'>
                 Crud API App

             </span>
             <div className='pt-8 text-center'>
                

                 <a href="https://github.com/AhmedFarag12/api_crud">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                 </a>
             </div>
           </div>

           
         </div>
        </div>

      </div>
    </div>
  )
}

export default Work