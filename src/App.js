import './App.css';

function App() {
  return (
    
    <div className="relative flex min-h-screen flex-col justify-center custom-background overflow-hidden bg-gray-50 py-6  sm:py-12">
      
      <div className="relative  bg-white px-10  pb-12 pt-16 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-lg sm:px-16 h-[530px] w-[450px]">
      
        <img
          src="https://play.tailwindcss.com/img/logo.svg"
          alt="logo"
          className="absolute top-1 left-4 w-40 h-20 mx-2"
          width="2900"
        />
        <div className="-mx-9 py-7 text-gray-600">
          <div class="">
            <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
          
            <ul class="space-y-4 py-7">
            <li class="flex items-center ">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-3">
                Customizing your
                <code class="text-sm font-bold text-gray-900"> tailwind.config.js</code> file
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Extracting classes with
                <code class="text-sm font-bold text-gray-900"> @apply</code>
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4"> Code completion with instant preview</p>
            </li>
          </ul>
          <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
          </div>
          <div className='pt-8 text-base font-semibold leading-7'>
            <hr className='py-3'></hr>
          <p class="text-gray-900">Want to dig deeper into Tailwind?</p>
          <p>
            <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
          </p>
          </div>
        </div>
      </div>
    </div>


  );
}



export default App;
