
const StepThree = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="addOns flex gap-4 sign-in bg-white shadow-md w-full rounded-md mt-12">
      <div className="sidebar px-8 w-1/3">
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
      
      <div class="flex flex-col p-10 w-4/6 mx-12 ml-0">
          <div>
            <h1 class="text-xl font-bold tracking-tight text-marineBlue sm:text-2xl">Pick add-ons</h1>
            <p class="mt-3 text-medium text-coolRay">Add-ons help enhance your gaming experience</p>
        </div> 
        <div className="flex mx-auto mt-8 mb-4 border border-solid border-coolRay w-full py-2 rounded-md bg-white shadow-sm">
          <input type="checkbox" id="service" className="w-4 h-4 m-4"/>
          <label for="service" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Online Service</h2>
                <p className="text-coolRay ml-6">Access to multiplayer games</p>
              </div>
              <h2 className="font-semibold m-4 ml-44">$1<span className="">/mo</span></h2>
            </div>
          </label>
        </div>

        <div className="flex mx-auto border border-solid border-coolRay w-full py-2 rounded-md bg-white shadow-sm">
          <input type="checkbox" id="service" className="w-4 h-4 m-4 "/>
          <label for="storage" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Large storage</h2>
              <p className="text-coolRay ml-6">Extra 1TB of cloud save</p>
              </div>
              <h2 className="font-semibold m-4 ml-52">$2<span className="">/mo</span></h2>
            </div>
          </label>
        </div>

        <div className="flex mx-auto mt-4 border border-solid border-coolRay w-full py-2 rounded-md bg-white shadow-sm mb-8">
          <input type="checkbox" id="service" className="w-4 h-4 m-4 "/>
          <label for="service" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Customizable profile</h2>
              <p className="text-coolRay ml-6">Custom theme on your profile</p>
              </div>
              <h2 className="font-semibold m-4 ml-40">$2<span className="">/mo</span></h2>
            </div>
          </label>
        </div>
        <div className="btns">
          <button className="float-left mt-12 text-lg text-coolRay">Go Back</button>
      <button className="float-right mt-12 font-sm text-white rounded-lg px-3 py-2 bg-marineBlue">Next Step</button>
        </div>
      </div>
      </div>
  </div>
  );
}

export default StepThree;