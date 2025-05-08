// import React from "react";
// import Video from "./Video";
// import { useAuth } from "../context/AuthProvider";
// function Home() {
//   cost{data}=useAuth();
//   console.log(data);
//   return (
//   <div className="flex">
//     <sidebar/><div>
//       {data.map((item)=>{
//         if(item.type!=="video") return false; any
//         return<video key={item.id}video=items?.video}/>;
//       })}
//       </div></div>
//     );
// }
// export default Home;
import React from "react";
import Video from "./Video";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const { data } = useAuth();
  console.log(data);

  return (
    <div className="flex  mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {data.map((item) => {
            if (item.type !== "video") return false;
            return <Video key={item.id} video={item.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
