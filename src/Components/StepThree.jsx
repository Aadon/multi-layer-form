
const StepThree = () => {
  return (
    <div className="flex justify-center items-center">
      <div class="addOns flex gap-4 sign-in bg-white shadow-md w-screen rounded-md mt-12">
      <div className="sidebar px-6 w-1/3">
        <ul className="steps text-white h-auto rounded-full px-2">
          <li className="">
            
            <h3 className="text-coolRay text-sm mt-8 ml-10 uppercase">step 1</h3>
            <div className="one inline circle m-4 ml-0">1</div>
            <a href="#"  className="text-white text-sm uppercase font-medium">your info</a>
          </li>
          <li className="">
            <h3 className="text-coolRay text-sm ml-10 uppercase pt-6">step 2</h3>
            <div className="one inline circle m-4 ml-0">2</div>
            <a href="#" className="text-white text-sm uppercase font-medium">select your plan</a>
          </li>
          <li className="">
            <h3 className="text-coolRay text-sm ml-10 uppercase pt-6">step 3</h3>
            <div className="one inline circle m-4 ml-0">3</div>
            <a href="#" className="text-white text-sm uppercase font-medium">add-ons</a>
          </li>
          <li className="">
            <h3 className="text-coolRay text-sm ml-10 uppercase pt-6">step 4</h3>
            <div className="one inline circle m-4 ml-0">4</div>
            <a href="#" className="text-white text-sm uppercase font-medium ">summary</a>
          </li>
        </ul>
      </div>
      
      <div class="flex h-full flex-col py-10 px-5">
        <div class="z-10 w-full max-w-screen-sm">
          <div>
            <h1 class="text-xl font-bold tracking-tight text-marineBlue sm:text-2xl">Pick add-ons</h1>
            <p class="mt-3 text-medium text-coolRay">Add-ons help enhance your gaming experience</p>
        </div>

        <div class="flex mx-auto mt-6 max-w-2xl">
          <input type="checkbox" name="service" id="service" className="text-base accent-green-500 text-white pt-12 w-10 h-10 mr-5 my-auto"/>
          <label for="service">
          <div class="flex cursor-pointer items-center justify-between rounded-xl border-solid border border-coolRay bg-white px-5 py-2 shadow">
            <div class="flex items-center gap-4">
              <div class="flex flex-col items-start">
              <h2 class="font-medium text-marineBlue sm:text-xl">Online service</h2>
              <p class="text-sm text-coolRay">For startups and new businesses</p>
            </div>
            </div>
            <h2 class="text-xl font-semibold text-neutral-900 sm:text-2xl">$49<span class="text-base font-medium text-neutral-400">/mo</span></h2>
          </div>
          </label>
        </div>
      </div>

      
        
        </div>
      </div>
  </div>
  );
}

export default StepThree;