const StepFour = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="addOns flex gap-4 sign-in bg-white w-full rounded-md mt-12">
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
            <h3 className="text-coolRay text-sm ml-11 uppercase">step 4</h3>
            <div className="four h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray">4</div>
            <a href="#" className="text-white text-sm uppercase font-medium mx-4">summary</a>
          </li>
        </ul>
      </div>
    
    <div className="finishing w-3/6">
      <div className="header py-8 pt-4">
        <h1 className="text-marineBlue font-bold text-xl mt-6">Finishing Up</h1>
        <p className="text-coolRay">Double-check everything looks Ok before confirming.</p>
      </div>
      
      <div className=" rounded-lg">
      <div className="flex px-3 py-3 rounded-sm w-98 bg-lightBlue cursor-pointer">
        <div className="">
          <h1 className="text-marineBlue px-2 hover:font-semibold ">Arcade (Monthly)</h1>
          <a href="#" className="text-coolRay px-2 underline hidden hover:block">change</a>
        </div>
        <h2 className="ml-64 pt-2 text-marineBlue hover:font-semibold">$9 <span className="">/mo</span></h2>
      </div>

      <div className="hero flex px-3 py-3 rounded-sm w-98 bg-lightBlue cursor-pointer hover:font-semibold">
        <div className="">
          <h1 className="text-marineBlue px-2">Arcade (Monthly)</h1>
          <a href="#" className="text-coolRay px-2 underline hidden ">change</a>
        </div>
        <h2 className="ml-64 pt-2 text-marineBlue hover:font-semibold">$1 <span className="">/mo</span></h2>
      </div>

      <div className="hero flex px-3 py-3 rounded-sm w-98 bg-lightBlue cursor-pointer mb-6">
        <div className="">
          <h1 className="text-marineBlue px-2 hover:font-semibold ">Arcade (Monthly)</h1>
          <a href="#" className="text-coolRay px-2 underline hidden hover:block">change</a>
        </div>
        <h2 className="ml-64 pt-2 text-marineBlue hover:font-semibold">$2 <span className="">/mo</span></h2>
      </div>
      <div className="flex mb-28">
        <h1 className="text-coolRay">Total (per month)</h1>
        <h2 className="ml-64 font-bold text-lg text-alabaster tracking-tighter">+$12 <span>/mo</span></h2>
      </div>
      </div>
      <div className="confirmation">

      </div>
      <button className="float-left text-lg text-coolRay">Go Back</button>
      <button className="float-right font-sm text-white rounded-lg px-3 py-2 bg-pastelBlue">Confirm</button>
    </div>
    </div>
    </div>
  );
}

export default StepFour;