import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaChevronRight, FaExchangeAlt } from "react-icons/fa";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <IoMdHome />,
    },
    {
      id: 2,
      name: "Short",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "YourChanel",
      icon: <FaExchangeAlt />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlinePlaylistPlay />,
    },
    {
      id: 4,
      name: "your videos",
      icon: <CiYoutube />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <SlLike />,
    },
  ];

  return (
    <div className="px-6 w-[15%]">
      <div className=" mt-4 space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* 
      YourChanel */}
      <div className="space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Sidebar;
