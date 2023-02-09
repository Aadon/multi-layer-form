import Arcade from "./images/Arcade.svg";
import Advanced from './images/icon-advanced.svg';
import Pro from './images/icon-pro.svg';

const StepTwo = () => {
  return (
    <div className="flex justify-center items-center">
      
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
      <div className="pt-10 ml-4 w-4/6 p-16">
        <div className="mb-4">
        <h1 className="text-2xl font-bold text-marineBlue mb-2">Select your plan</h1>
      <p className="text-l text-coolRay">You have the option of monthly or yearly billing.</p>
      </div>
        <div className="card-wrapper grid grid-cols-3 w-full mt-8 mb-8">

        <div className="arcade-card w-32 shadow-sm relative border-solid border-lightGray border rounded-md pb-2 hover:bg-gray-100 hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Arcade} alt="photo" className="absolute top-4 left-6" />
        <h2 className="arcade text-sm font-bold text-coolRay pt-24 px-4">Arcade</h2>
        <p className="text-coolRay text-sm px-4">$9/mo</p>
      </div>
      <div className="advanced-card shadow-sm w-32 relative border-solid border-lightBlue border rounded-md pb-2 hover:bg-gray-100 hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Advanced} alt="photo" className="absolute top-4 left-6"/>
        <h2 className="text-sm font-bold text-coolRay pt-24 px-4">Advanced</h2>
        <p className="text-coolRay text-sm px-4">$12/mo</p>
      </div>
      <div className="pro-card shadow-sm w-32 relative border-solid border-coolRay border rounded-md pb-2 hover:bg-lightBlue hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Pro} alt="photo" className="absolute top-4 left-6"/>
        <h2 className="text-sm font-bold text-coolRay pt-24 px-4">Pro</h2>
        <p className="text-coolRay text-sm px-4">$15/mo</p>
      </div>
      </div>
      
      <div class="flex items-center justify-center relative bg-lightBlue w-full mb-12 py-2 rounded-md shadow-inner">
  <label for="toggle" className="flex items-center cursor-pointer">
    <div className="monthly mr-6 font-semibold text-marineBlue">
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
      <button className="float-left mt-14 text-lg text-coolRay">Go Back</button>
      <button className="float-right mt-14 font-sm text-white rounded-md px-3 py-2 bg-marineBlue">Next Step</button>
      </div>
      </div>
    </div>
  );
}

export default StepTwo;