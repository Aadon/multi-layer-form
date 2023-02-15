import Arcade from "./images/Arcade.svg";
import Advanced from './images/icon-advanced.svg';
import Pro from './images/icon-pro.svg';

const StepTwo = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col navbar w-24 mx-auto max-h-40 sign-in md:hidden">
      <div className="flex justify-center items-start pt-9 max-w-24 mb-8">
      <ul>
        <li className="one h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">1</li>
      <li className="two h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">2</li>
      <li className="three h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">3</li>
      <li className="four h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">4</li>
      </ul>
      </div>
      <div className="bg-white h-[540px] w-[375px] px-6 ml-2 shadow-md rounded-xl">
        <div className="">
        <h1 className="text-2xl font-bold text-marineBlue py-2 pt-4">Select your plan</h1>
      <p className="text-l text-coolRay">You have the option of monthly or yearly billing.</p>
      </div>
        <div className="card-wrapper grid grid-rows-3 w-full mt-4 ">

        <div className="flex arcade-card shadow-sm w-full my-2 border-solid border-lightBlue border rounded-md hover:bg-lightBlue hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Arcade} alt="photo" className="mx-6"/>
        <div className="pt-3 mx-2">
          <h2 className="text-sm font-bold text-coolRay">Arcade</h2>
        <p className="text-coolRay text-sm py-1">$9/yr</p>
        <p className="text-marineBlue font-semibold text-sm mb-3">2 Months free</p>
        </div>
      </div>
      <div className="flex advanced-card shadow-sm w-full my-2 border-solid border-lightBlue border rounded-md hover:bg-lightBlue hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Advanced} alt="photo" className="mx-6"/>
        <div className="pt-3 mx-2">
          <h2 className="text-sm font-bold text-coolRay">Advanced</h2>
        <p className="text-coolRay text-sm py-1">$12/yr</p>
        <p className="text-marineBlue font-semibold text-sm mb-3">2 Months free</p>
        </div>
      </div>
      <div className="flex pro-card shadow-sm w-full my-2 border-solid border-lightBlue border rounded-md hover:bg-lightBlue hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Pro} alt="photo" className="mx-6"/>
        <div className="pt-3 mx-2">
          <h2 className="text-sm font-bold text-coolRay">Pro</h2>
        <p className="text-coolRay text-sm py-1">$15/yr</p>
        <p className="text-marineBlue font-semibold text-sm mb-3">2 Months free</p>
        </div>
      </div>
      </div>

      <div className="flex items-center justify-center relative bg-lightBlue mb-10 py-2 mt-4 rounded-md shadow-inner">
  <label for="toggle" className="flex items-center cursor-pointer">
    <div className="monthly mr-6 font-semibold text-marineBlue">
      Monthly
      </div>
    <div class="">
      <input id="toggle" type="checkbox" className="switch-box sr-only" />
      <div className="line w-9 h-4 bg-marineBlue rounded-full shadow-inner"></div>
      <div class="dot absolute w-4 h-4 left-50 top-3 bg-white rounded-full shadow transition"></div>
    </div>
    <div class="ml-8 text-marineBlue font-medium">
      Yearly
    </div>
  </label>
  
</div>
    </div>
      <div className="bg-white py-3 mt-8 pb-6 w-[400px]">
        <button className="float-left text-lg text-coolRay mt-4 mx-4">Go Back</button>
        <button className="float-right font-sm text-white rounded-md py-2 px-4 mt-2 mr-8 bg-marineBlue">Next Step</button>
      </div>

    <div className="flex justify-center items-center sm:hidden md:block">
    <div className="personal-info flex sign-in bg-white shadow-md w-full rounded-md mt-12">
      <div className="sidebar px-8 w-1/3">
        <ul className="steps text-white h-auto rounded-full px-2">

          <li className="mt-8">
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
      <div className="pt-10 w-4/6 p-12 mr-6">
        <div className="mb-8 ml-4">
        <h1 className="text-2xl font-bold text-marineBlue mb-2">Select your plan</h1>
      <p className="text-l text-coolRay">You have the option of monthly or yearly billing.</p>
      </div>
        <div className="card-wrapper grid grid-cols-3 w-full mt-10 mb-6 ml-4">

        <div className="arcade-card w-32 shadow-sm relative border-solid border-lightBlue border rounded-md pb-2 hover:bg-lightBlue hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Arcade} alt="photo" className="absolute top-4 left-6" />
        <h2 className="arcade text-sm font-bold text-coolRay pt-24 px-4">Arcade</h2>
        <p className="text-coolRay text-sm px-4 py-1">$90/yr</p>
        <p className="text-marineBlue font-semibold text-sm px-4">2 Months free</p>
      </div>
      <div className="advanced-card shadow-sm w-32 relative border-solid border-lightBlue border rounded-md pb-2 hover:bg-lightBlue hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Advanced} alt="photo" className="absolute top-4 left-6"/>
        <h2 className="text-sm font-bold text-coolRay pt-24 px-4">Advanced</h2>
        <p className="text-coolRay text-sm px-4 py-1">$120/yr</p>
        <p className="text-marineBlue font-semibold text-sm px-4">2 Months free</p>
      </div>
      <div className="pro-card shadow-sm w-32 relative border-solid border-lightBlue border rounded-md pb-2 hover:bg-lightBlue hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Pro} alt="photo" className="absolute top-4 left-6"/>
        <h2 className="text-sm font-bold text-coolRay pt-24 px-4">Pro</h2>
        <p className="text-coolRay text-sm px-4 py-1">$150/yr</p>
        <p className="text-marineBlue font-semibold text-sm px-4">2 Months free</p>
      </div>
      </div>

      <div className="flex items-center justify-center ml-4 relative bg-lightBlue mb-10 py-2 rounded-md shadow-inner">
  <label for="toggle" className="flex items-center cursor-pointer">
    <div className="monthly mr-12 font-semibold text-marineBlue">
      Monthly
      </div>
    <div class="">
      <input id="toggle" type="checkbox" className="switch-box sr-only" />
      <div className="line w-9 h-4 bg-marineBlue rounded-full shadow-inner"></div>
      <div class="dot absolute w-4 h-4 left-50 top-3 bg-white rounded-full shadow transition"></div>
    </div>
    <div class="ml-16 text-marineBlue font-medium">
      Yearly
    </div>
  </label>
  
</div>
      <button className="float-left mt-16 text-lg text-coolRay">Go Back</button>
      <button className="float-right mt-16 font-sm text-white rounded-lg px-3 py-2 bg-marineBlue">Next Step</button>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default StepTwo;