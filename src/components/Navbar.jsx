// // App.jsx
// import React from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";

// import logo from "../../public/logo.png";
// function Navbar() {
//   return (
//     <div className="flex justify-between px-6 py-2">
//       <div className=" flex item-cente space-x-4 border border-black">
//         <AiOutlineMenu className="text-xl cursor-pointer" />
//         <img src={logo} alt="" className="w-28 cursor-pointer" />
//       </div>
//       <div className="border border-black">
//         <input type="text" placeholder="search" className="outline" />
//         <CiSearch />
//       </div>
//       <div className="border border-black">3</div>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";

import logo from "../../public/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4 ">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="Logo" className="w-28 cursor-pointer" />
      </div>

      <div className="flex items-center space-x-2 w-[35%] ">
        <div className="w-[100%] px-3 py-2 border-rounded-1-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-2 py-1"
          />
        </div>
        <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>

        <IoMdMic
          size={"42"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      <div className="flex space-x-5 items-center"></div>
    </div>
  );
}

export default Navbar;
