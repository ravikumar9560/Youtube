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
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";

import { CiMusicNote1 } from "react-icons/ci";
import { BiMoviePlay } from "react-icons/bi";
import { CgLivePhoto } from "react-icons/cg";
import { SiEslgaming } from "react-icons/si";

import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineSportsEsports } from "react-icons/md";

import { SiCoursera } from "react-icons/si";

import { FaRegGrinBeam } from "react-icons/fa";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { CiSettings } from "react-icons/ci";

import { CiFlag1 } from "react-icons/ci";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

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
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <FaMoneyBillTrendUp />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <CiShoppingBasket />,
    },
    {
      id: 3,
      name: "Music",
      icon: <CiMusicNote1 />,
    },
    {
      id: 4,
      name: "Movies",
      icon: <BiMoviePlay />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgLivePhoto />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiEslgaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "SPorts",
      icon: <MdOutlineSportsEsports />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiCoursera />,
    },
    {
      id: 10,
      name: "Fashion & Beauty",
      icon: <FaRegGrinBeam />,
    },
    {
      id: 11,
      name: "Podcast",
      icon: <MdOutlinePodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <LuYoutube />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Setting",
      icon: <CiSettings />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <CiFlag1 />,
    },
    {
      id: 3,
      name: "Help",
      icon: <MdOutlineHelpOutline />,
    },
    {
      id: 3,
      name: "Send Feedback",
      icon: <MdOutlineFeedback />,
    },
  ];

  return (
    <div className="px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
      <div className=" mt-4 space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
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
            <div className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* Explore */}
      <div className=" mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 className="font-extrabold">Explore</h1>
          <FaChevronRight />
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* more section */}
      <div className=" mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 className="font-extrabold">More</h1>
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer text-red-500">
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <div className=" mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 className="font-extrabold"></h1>
        </div>
        {sidebarItems5.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer ">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      <span className="text-xs font-semibold text-gray-500 ">
        About Press Copyright
        <br />
        Contact Us Creator
        <br />
        Advertise Developers
        <br />
        Terms Privacy Policy & Safety
        <br />
        How YouTube Works
        <br />
        Test New Features
      </span>

      <br />
      <p className="text-xs text-gray-800 mt-1">©2024 Learn coding</p>
    </div>
  );
}

export default Sidebar;
