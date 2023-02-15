const StepThreeB = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center navbar mx-auto max-h-40 sign-in md:hidden sm:block">
      <div className="flex justify-center items-start pt-9 max-w-24 mb-8">
      <ul>
        <li className="one h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">1</li>
      <li className="two h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">2</li>
      <li className="three h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">3</li>
      <li className="four h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">4</li>
      </ul>
      </div>
      <div className="flex flex-col items-center bg-white h-[400px] max-w-[375px] px-6 ml-2 shadow-md rounded-xl">
        <div className="">
        <h1 className="text-2xl font-bold text-marineBlue py-2 pt-4">Pick add-ons</h1>
      <p className="text-l text-coolRay">Add-ons help enhance your gaming experience.</p>
      </div>
        
          
        <div className="flex border-2 mt-6 border-solid border-lightGray w-full py-2 rounded-md bg-white shadow-sm hover:border-2 hover:border-solid hover:border-coolRay">
          <input type="checkbox" id="service" className="w-4 h-4 m-4"/>
          <label for="service" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-1 ml-2 font-bold text-marineBlue">Online Service</h2>
                <p className="text-coolRay ml-2 text-sm">Access to multiplayer games</p>
              </div>
              <h2 className="font-semibold text-coolRay pt-3 ml-8 tracking-tighter">$10<span className="">/yr</span></h2>
            </div>
          </label>
        </div>

        <div className="flex border-2 border-solid border-lightGray w-full mt-2 mb-2 py-2 rounded-md bg-white shadow-sm hover:border-2 hover:border-solid hover:border-coolRay">
          <input type="checkbox" id="service" className="w-4 h-4 m-4 "/>
          <label for="storage" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-3">Large storage</h2>
              <p className="text-coolRay ml-3 text-sm">Extra 1TB of cloud save</p>
              </div>
              <h2 className="font-semibold text-coolRay pt-3 ml-14 tracking-tighter">$20<span className="">/yr</span></h2>
            </div>
          </label>
        </div>

        <div className="flex border-2 border-solid border-lightGray w-full py-2  rounded-md bg-white shadow-sm hover:border-2 hover:border-solid hover:border-coolRay">
          <input type="checkbox" id="service" className="w-4 h-4 m-4 "/>
          <label for="service" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-2">Customizable profile</h2>
              <p className="text-coolRay ml-2 text-sm">Custom theme on your profile</p>
              </div>
              <h2 className="font-semibold text-coolRay pt-3 ml-6 tracking-tighter">$20<span className="">/yr</span></h2>
            </div>
          </label>
        </div>
        <div className="btns bg-white mt-36 pb-4 w-[400px]">
        <button className="float-left text-lg text-coolRay mt-5 ml-4">Go Back</button>
        <button className="float-right font-sm text-white rounded-md px-3 py-2 mt-4 mr-4 bg-marineBlue">Next Step</button>
      </div>
      </div>
    <div className="flex justify-center items-center sm:hidden">
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
      
      <div class="flex flex-col pt-8 w-4/6 px-8 mr-6">
          <div>
            <h1 class="text-xl font-bold tracking-tight text-marineBlue sm:text-2xl">Pick add-ons</h1>
            <p class="mt-2 text-medium text-coolRay">Add-ons help enhance your gaming experience</p>
        </div> 
        <div className="flex mt-8 border-2 border-solid border-lightGray w-full py-2 rounded-md bg-white shadow-sm hover:border-2 hover:border-solid hover:border-coolRay">
          <input type="checkbox" id="service" className="w-4 h-4 m-4"/>
          <label for="service">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Online Service</h2>
                <p className="text-coolRay ml-6">Access to multiplayer games</p>
              </div>
              <h2 className="font-semibold text-coolRay pt-3 ml-28">+$10<span>/yr</span></h2>
            </div>
          </label>
        </div>

        <div className="flex border-2 border-solid border-lightGray w-full mt-2 mb-2 py-2 rounded-md bg-white shadow-sm hover:border-2 hover:border-solid hover:border-coolRay">
          <input type="checkbox" id="service" className="w-4 h-4 m-4"/>
          <label for="storage" className="">
              <div className="flex">
              <div className="">
                <h2 className="font-bold text-marineBlue ml-6">Large storage</h2>
              <p className="text-coolRay ml-6">Extra 1TB of cloud save</p>
              </div>
              <h2 className="font-semibold text-coolRay pt-3 ml-36">+$20<span>/yr</span></h2>
            </div>
          </label>
        </div>

        <div className="flex border-2 border-solid border-lightGray w-full py-2 rounded-md bg-white shadow-sm mb-12 hover:border-2 hover:border-solid hover:border-coolRay">
          <input type="checkbox" id="service" className="w-4 h-4 m-4 "/>
          <label for="service" className="">
              <div className="flex">
              <div className="">
                <h2 className="pt-2 font-bold text-marineBlue ml-6">Customizable profile</h2>
              <p className="text-coolRay ml-6">Custom theme on your profile</p>
              </div>
              <h2 className="font-semibold text-coolRay pt-3 ml-24">+$20<span>/yr</span></h2>
            </div>
          </label>
        </div>
        <div className="btns">
          <button className="float-left mt-16 text-lg text-coolRay">Go Back</button>
      <button className="float-right mt-16 font-sm text-white rounded-lg px-3 py-2 bg-marineBlue">Next Step</button>
        </div>
      </div>
      </div>
  </div>
  </div>
  </div>
  );
}

export default StepThreeB;