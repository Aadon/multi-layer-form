
const StepOne = () => {

  return (
    <div className="flex justify-center items-center">
    <div className="personal-info flex justify-around sign-in bg-white shadow-md w-11/12 rounded-md mt-12 md:flex-col">
      <div className="sidebar px-6 w-1/3">
        <ol className="steps text-white h-auto rounded-full px-2">
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
        </ol>
      </div>
      <div className="data px-12 py-4 mt-8 w-2/3">
        <header>
        <h1 class="text-3xl font-bold text-marineBlue">Personal Info</h1>
        <p className="text-coolRay">Please provide your personal info</p>
      </header>
      <form action="">
        <div className="name-sect mt-4 ">
          <label for="name" className="block mb-2 text-sm font-medium text-marineBlue dark:text-white">Name</label>
          <input type="text" id="name" placeholder="Enter your name here" className="border border-lightGray text-gray-700 text-sm rounded-md focus:ring-lightGray focus:border-lightGray block w-full p-2" required/>
        </div>
        <div className="email-sect mt-4">
          <label for="email-sect" className="block mb-2 text-sm font-medium text-marineBlue dark:text-white">Email</label>
          <input type="text" id="email" placeholder="stephenking@lorem.com" className="border border-lightGray text-gray-700 text-sm rounded-md focus:lightBlue focus:border-lightGray block w-full p-2" required/>
        </div>
        <div className="phone-sect mt-4 mb-16">
          <label for="telephone" className="block mb-2 text-sm font-medium text-marineBlue dark:text-white">Phone Number</label>
          <input type="number" id="telephone" placeholder="e.g +1 234 567 890" className="border border-lightGray text-gray-700 text-sm rounded-md focus:lightBlue focus:border-lightGray block w-full p-2 required"/>
        </div>
        <button className="float-right mt-12 font-sm text-white rounded-lg px-3 py-2 bg-marineBlue">Next Step</button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default StepOne;