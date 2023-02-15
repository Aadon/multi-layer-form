
const StepOne = () => {

  return (
    <div className="flex justify-center">
    <div className="flex flex-col navbar w-24 max-h-40 sign-in md:hidden">
      <div className="flex justify-center items-start pt-9 max-w-24">
      <ul>
        <li className="one h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">1</li>
      <li className="two h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">2</li>
      <li className="three h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">3</li>
      <li className="four h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray mx-3">4</li>
      </ul>
      </div>
      <div className="data bg-white shadow-md rounded-lg mx-auto px-6 py-4 mt-8 w-5/6">
      <div className="mb-10">
        <h1 class="text-3xl font-bold text-marineBlue mb-2">Personal Info</h1>
        <p className="text-coolRay">Please provide your name, email address and phone number</p>
      </div>
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
      </form>
      </div>
      <div className="bg-white py-3 mt-28 pb-9">
        <button className="float-right font-sm text-white rounded-md py-3 px-4 mt-2 mr-3 bg-marineBlue">Next Step</button>
      </div>
      </div>

      <div className="flex justify-center items-center sm:hidden md:block">
    <div className="personal-info flex sign-in bg-white shadow-md w-full rounded-md mt-12 ">
      <div className="sidebar px-8 w-1/3">
        <ol className="steps text-white h-auto rounded-full px-2">

          <li className="">
            <h3 className="text-coolRay text-sm mt-8 ml-11 uppercase">step 1</h3>
            <div className="one h-7 w-7 inline-block rounded-full text-center text-white border border-solid border-lightGray">1</div>
            <a href="#" className="text-white text-sm uppercase font-medium mx-4">your info</a>
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
        </ol>
      </div>
      <div className="data p-12 py-4 mt-8 w-4/6 mr-6 ml-6">
      <div className="mb-10">
        <h1 class="text-3xl font-bold text-marineBlue mb-2">Personal Info</h1>
        <p className="text-coolRay">Please provide your personal info</p>
      </div>
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
        <button className="float-right mt-8 font-sm text-white rounded-lg px-3 py-2 bg-marineBlue">Next Step</button>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default StepOne;