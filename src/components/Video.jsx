import React from "react";
import { Link } from "react-router-dom";

function Video({ video }) {
  console.log(video);

  return (
    <div className="">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          <div className=" relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthsecond && <Timme time={video?.lengthsecond} />}
          </div>
          <div className="flex space-x-2 mt-3 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12pc] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div>
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
