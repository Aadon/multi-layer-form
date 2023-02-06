import greet from './images/icon-thank-you.svg';

const StepFive = () => {


  return (
    <div className="container flex justify-center items-center">
      <div className="addOns flex sign-in bg-white w-full rounded-md mt-12">

          <div className="sidebar px-8 w-2/5">
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

      <div className="main flex flex-col justify-center items-center w-96">
        <img src={greet} alt="greet" />
        <div className="m-8 ">
        <h1 className='text-marineBlue font-bold text-2xl py-3 text-center'>Thank you!</h1>
        <p className='text-coolRay'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please free to email us at support@gamingfidel.com.</p>
      </div>
      </div>
      
    </div>
    </div>
  );
}

export default StepFive;