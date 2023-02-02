import Arcade from "./images/Arcade.svg";
import Advanced from './images/icon-advanced.svg';
import Pro from './images/icon-pro.svg';
import Switch from './images/switch.png';

const StepTwo = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="personal-info flex justify-around sign-in bg-white shadow-md w-11/12 rounded-md mt-12">
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
      <div className="m-10">
        <header className="mb-8">
        <h1 className="text-2xl font-bold text-marineBlue">Select your plan</h1>
      <p className="text-l text-coolRay">You have the option of monthly or yearly billing.</p>
      </header>
        <div className="card-wrapper grid grid-cols-3 gap-5 w-full mt-10 mb-8">

        <div className="arcade-card w-36 shadow-sm relative border-solid border-lightGray border rounded-md pb-2 hover:bg-gray-100 hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Arcade} alt="photo" className="absolute top-4 left-6" />
        <h2 className="arcade text-sm font-bold text-coolRay pt-24 px-4">Arcade</h2>
        <p className="text-coolRay text-sm px-4">$9/mo</p>
      </div>
      <div className="advanced-card shadow-sm w-36 relative border-solid border-lightGray border rounded-md pb-2 hover:bg-gray-100 hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Advanced} alt="photo" className="absolute top-4 left-6"/>
        <h2 className="text-sm font-bold text-coolRay pt-24 px-4">Advanced</h2>
        <p className="text-coolRay text-sm px-4">$12/mo</p>
      </div>
      <div className="pro-card shadow-sm w-36 relative border-solid border-lightGray border rounded-md pb-2 hover:bg-gray-100 hover:border-solid hover:border-1 hover:border-coolRay cursor-pointer">
        <img src={Pro} alt="photo" className="absolute top-4 left-6"/>
        <h2 className="text-sm font-bold text-coolRay pt-24 px-4">Pro</h2>
        <p className="text-coolRay text-sm px-4">$15/mo</p>
      </div>
      </div>
      <div class="flex items-center justify-center relative bg-gray-100 w-full mb-12 py-2 rounded-md shadow-inner">
  
  <label for="toggle" className="flex items-center cursor-pointer">
    <div className="monthly mr-12 font-semibold text-gray-700">
      Monthly
      </div>
    <div class="">
      <input id="toggle" type="checkbox" className="switch-box sr-only" />
      <div className="line w-9 h-4 bg-marineBlue rounded-full shadow-inner"></div>
      <div class="dot absolute w-4 h-4 left-50 top-3 bg-white rounded-full shadow transition"></div>
    </div>
    <div class="ml-20 text-gray-700 font-medium">
      Yearly
    </div>
  </label>
  
</div>
      <button className="float-left mt-12 text-lg text-coolRay">Go Back</button>
      <button className="float-right mt-12 font-lg text-white rounded-md px-2 py-1 bg-marineBlue">Next Step</button>
      </div>
      </div>
    </div>
  );
}

export default StepTwo;