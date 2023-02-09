
const StepThree = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="addOns flex gap-4 sign-in bg-white shadow-md w-full rounded-md mt-12">
      <div className="sidebar px-8 w-1/3">
        <ul className="steps text-white h-auto rounded-full px-2">

          <li className="">
            <h3 className="text-coolRay text-sm mt-8 ml-11 uppercase">step 1</h3>
            <div className="one h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray">1</div>
            <a href="#"  className="text-white text-sm uppercase font-medium mx-4">your info</a>
          </li>
          <li className="mt-8">
            <h3 className="text-coolRay text-sm ml-11 uppercase">step 2</h3>
            <div className="two h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray">2</div>
            <a href="#" className="text-white text-sm uppercase font-medium mx-4">select your plan</a>
          </li>
          <li className="mt-8">
            <h3 className="text-coolRay text-sm ml-11 uppercase">step 3</h3>
            <div className="three h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray">3</div>
            <a href="#" className="text-white text-sm uppercase font-medium mx-4">add-ons</a>
          </li>
          <li className="mt-8">
            <h3 className="text-coolRay text-sm ml-10 uppercase">step 4</h3>
            <div className="four h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray">4</div>
            <a href="#" className="text-white text-sm uppercase font-medium mx-4">summary</a>
          </li>
        </ul>
      </div>
      
      <div class="flex flex-col p-10 w-4/6 px-12">
          <div>
            <h1 class="text-xl font-bold tracking-tight text-marineBlue sm:text-2xl">Pick add-ons</h1>
            <p class="mt-3 text-medium text-coolRay">Add-ons help enhance your gaming experience</p>
        </div> 
        <div className="flex mx-auto mt-8 mb2 border border-solid border-coolRay w-full py-2 rounded-md bg-white shadow-sm">
          <input type="checkbox" id="service" className="w-4 h-4 m-4"/>
          <label for="service" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Online Service</h2>
                <p className="text-coolRay ml-6">Access to multiplayer games</p>
              </div>
              <h2 className="font-semibold m-4">$1<span className="">/mo</span></h2>
            </div>
          </label>
        </div>

        <div className="flex border border-solid border-coolRay w-full py-2 mx-auto rounded-md bg-white shadow-sm">
          <input type="checkbox" id="service" className="w-4 h-4 m-4 "/>
          <label for="storage" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Large storage</h2>
              <p className="text-coolRay ml-6">Extra 1TB of cloud save</p>
              </div>
              <h2 className="font-semibold m-4 text-end">$2<span className="">/mo</span></h2>
            </div>
          </label>
        </div>

        <div className="flex mt-4 border border-solid border-coolRay w-full py-2 rounded-md bg-white shadow-sm mb-8">
          <input type="checkbox" id="service" className="w-4 h-4 m-4 "/>
          <label for="service" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Customizable profile</h2>
              <p className="text-coolRay ml-6">Custom theme on your profile</p>
              </div>
              <h2 className="font-semibold m-4 text-end text-">$2<span className="">/mo</span></h2>
            </div>
          </label>
        </div>
        <div className="btns">
          <button className="float-left mt-10 text-lg text-coolRay">Go Back</button>
      <button className="float-right mt-10 font-sm text-white rounded-lg px-3 py-2 bg-marineBlue">Next Step</button>
        </div>
      </div>
      </div>
  </div>
  );
}

export default StepThree;