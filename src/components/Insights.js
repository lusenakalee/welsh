import React from 'react'
import Navbar from './Navbar'


function Insights() {
  return (
    <div>
        <Navbar/>
<section
  class="relative bg-[url(https://images.pexels.com/photos/8730785/pexels-photo-8730785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="/Events"
          class="block w-full rounded outline px-12 py-3 text-sm font-medium text-rose-600 shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Events
        </a>

        <a
          href="/News"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          News
        </a>
        <a
          href="/Archives"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Archives
        </a>
      </div>
    </div>
  </div>
</section>




    </div>
    
  )
}

export default Insights