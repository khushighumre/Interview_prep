import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { CARD_BG } from '../../utils/data';
import toast from 'react-hot-toast';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import moment from 'moment';
import SummaryCard from '../../components/Cards/SummaryCard';

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [sessions, setSessions] = useState([]);

  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSIONS.GET_ALL);
      console.log("API response:", response.data);
      setSessions(response.data.sessions); // ✅ corrected
    } catch (error) {
      console.error("Error fetching sessions data", error);
    }
  };

  const deleteSession = async (sessionData) => {};

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <DashboardLayout>
      <div className='container mx-auto pt-4 pb-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mmd:gap-7 pt-1 pb-6 px-4 md:px-0'>
          {sessions?.map((data, index) => (
            <SummaryCard
              key={data?._id}
              colors={CARD_BG[index % CARD_BG.length]}
              role={data?.role || ""}
              topicsToFocus={data?.topicsToFocus || ""}
              experience={data?.experience || ""}
              questions={data?.questions?.length || "_"}
              description={data?.description || ""}
              lastUpdated={
                data?.updatedAt
                  ? moment(data.updatedAt).format("DD MM YYYY")
                  : ""
              }
              onSelect={() => navigate(`/interview-prep/${data?._id}`)}
              onDelete={() => setOpenDeleteAlert({ open: true, data })}
            />
          ))}

        </div>
        <button
          className="h-12 md:h-12 flex items-center justify-center gap-3 bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer hover-shadow-2xl hover:shadow-orange-300 fixed bottom-10 md:bottom-20 right-10 md:right-20"
          onClick={() => setOpenCreateModal(true)}>
          <LuPlus className='text-2xl text-white' />
          Add New
        </button>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard;


























// import React, { useEffect, useState } from 'react';
// import { LuPlus } from "react-icons/lu";
// import { CARD_BG } from '../../utils/data';
// import DashboardLayout from '../../components/layouts/DashboardLayout';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../utils/axiosInstance';
// import { API_PATHS } from '../../utils/apiPaths';
// import moment from 'moment';
// import SummaryCard from '../../components/Cards/SummaryCard';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const [openCreateModal, setOpenCreateModal] = useState(false);
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [openDeleteAlert, setOpenDeleteAlert] = useState({
//     open: false,
//     data: null,
//   });

//   const fetchAllSessions = async () => {
    
//     try {
//       const response = await axiosInstance.get(API_PATHS.SESSIONS.GET_ALL);
     
//       console.log("API response:", response.data);

//       // check if valid JSON
//       if (
//   response.data?.sessions &&
//   Array.isArray(response.data.sessions) &&
//   response.data.sessions.length > 0
// ) {
//   setSessions(response.data.sessions);
// } else {
//   console.warn("No sessions returned from API. Using fallback dummy data.");
//   setSessions([
//     {
//       _id: "1",
//       role: "Frontend Developer",
//       topicsToFocus: "React, Tailwind",
//       experience: "2 years",
//       questions: ["What is JSX?", "Explain useEffect"],
//       description: "Frontend practice session",
//       updatedAt: new Date(),
//     },
//     {
//       _id: "2",
//       role: "Backend Developer",
//       topicsToFocus: "Node.js, MongoDB",
//       experience: "1 year",
//       questions: ["Explain JWT auth"],
//       description: "Backend prep",
//       updatedAt: new Date(),
//     },
//   ]);
// }

//     } catch (error) {
//       console.error("Error fetching sessions data", error);

//       // fallback dummy data so UI shows cards
//       setSessions([
//         {
//           _id: "dummy-1",
//           role: "Full Stack Engineer",
//           topicsToFocus: "React, Express",
//           experience: "Fresher",
//           questions: [],
//           description: "Fallback card – API failed",
//           updatedAt: new Date(),
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteSession = async (sessionData) => {
//     // implement delete later
//   };

//   useEffect(() => {
//     fetchAllSessions();
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto pt-4 pb-4">
//         {loading ? (
//           <p className="text-center text-gray-500">Loading sessions...</p>
//         ) : sessions.length === 0 ? (
//           <p className="text-center text-gray-500">No sessions found</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mmd:gap-7 pt-1 pb-6 px-4 md:px-0">
//             {sessions.map((data, index) => (
//               <SummaryCard
//                 key={data?._id}
//                 colors={CARD_BG[index % CARD_BG.length]}
//                 role={data?.role || ""}
//                 topicsToFocus={data?.topicsToFocus || ""}
//                 experience={data?.experience || ""}
//                 questions={data?.questions?.length || "_"}
//                 description={data?.description || ""}
//                 lastUpdated={
//                   data?.updatedAt
//                     ? moment(data.updatedAt).format("DD MMM YYYY")
//                     : ""
//                 }
//                 onSelect={() => navigate(`/interview-prep/${data?._id}`)}
//                 onDelete={() => setOpenDeleteAlert({ open: true, data })}
//               />
//             ))}
//           </div>
//         )}

//         {/* Floating button */}
//         <button
//           className="h-12 md:h-12 flex items-center justify-center gap-3 bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer hover-shadow-2xl hover:shadow-orange-300 fixed bottom-10 md:bottom-20 right-10 md:right-20"
//           onClick={() => setOpenCreateModal(true)}
//         >
//           <LuPlus className="text-2xl text-white" />
//           Add New
//         </button>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;


























// import React, { useState, useEffect } from "react";
// import { LuPlus } from "react-icons/lu";
// import { CARD_BG } from "../../utils/data";
// import DashboardLayout from "../../components/layouts/DashboardLayout";
// import SummaryCard from "../../components/Cards/SummaryCard";
// import moment from "moment";

// const Dashboard = () => {
//   const [sessions, setSessions] = useState([]);

//   useEffect(() => {
//     // ✅ Hardcoded dummy data for debugging
//     setSessions([
//       {
//         _id: "1",
//         role: "Frontend Developer",
//         topicsToFocus: "React, Tailwind, Hooks",
//         experience: "2 years",
//         questions: ["What is useEffect?", "Explain Virtual DOM"],
//         description: "Frontend preparation for React interviews",
//         updatedAt: new Date(),
//       },
//       {
//         _id: "2",
//         role: "Backend Developer",
//         topicsToFocus: "Node.js, Express, MongoDB",
//         experience: "1 year",
//         questions: ["Explain JWT", "What is middleware?"],
//         description: "Backend preparation for Node.js interviews",
//         updatedAt: new Date(),
//       },
//     ]);
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto pt-4 pb-4">
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mmd:gap-7 pt-1 pb-6 px-4 md:px-0">
//           {sessions?.map((data, index) => (
//             <SummaryCard
//               key={data?._id}
//               colors={CARD_BG[index % CARD_BG.length]}
//               role={data?.role || ""}
//               topicsToFocus={data?.to
// picsToFocus || ""}
//               experience={data?.experience || ""}
//               questions={data?.questions?.length || "_"}
//               description={data?.description || ""}
//               lastUpdated={
//                 data?.updatedAt
//                   ? moment(data.updatedAt).format("DD-MM-YYYY")
//                   : ""
//               }
//               onSelect={() => alert(`Selected: ${data?._id}`)}
//               onDelete={() => alert(`Delete: ${data?._id}`)}
//             />
//           ))}
//         </div>

//         {/* Floating Add Button */}
//         <button
//           className="h-12 md:h-12 flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer hover:shadow-2xl hover:shadow-orange-300 fixed bottom-10 md:bottom-20 right-10 md:right-20"
//           onClick={() => alert("Add new clicked")}
//         >
//           <LuPlus className="text-2xl text-white" />
//           Add New
//         </button>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;