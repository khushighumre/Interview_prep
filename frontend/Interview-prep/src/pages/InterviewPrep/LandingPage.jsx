import React, { useState } from 'react'
import HERO_IMG from "../../assets/home-page.jpg"; 
// import {APP_FEATURES} from "../utils/data";
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu'; // ✅ note: use 'react-icons/lu', not 'react-icons-lu'
import { APP_FEATURES } from '../../utils/data';
import Modal from "../../components/Modal.jsx"; // adjust path if needed
import Login from '../Auth/Login.jsx';
import SignUp from '../Auth/SignUp.jsx';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext.jsx';
import ProfileInfoCard from '../../components/Cards/ProfileInfoCard.jsx';



const LandingPage = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if(!user){
      setOpenAuthModal(true);
    }else{
      navigate("/options");
    }
  };
  return (
    <>
    <div className="w-full min-h-screen bg-[#FFFCEF] relative overflow-hidden">
      <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0"/>
      <div className="w-full px-4 md:px-8 pt-8 pb-8 relative z-10">
        <header className="flex justify-between items-center mb-20">
          <div className="text-xl text-black font-bold">
            Interview Prep AI
      </div>
       {user ? (
        <ProfileInfoCard />
       ) : (<button 
       className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
       onClick={() => setOpenAuthModal(true)}>
        Login / Sign Up
       </button>)}
       </header>

       <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left ml-0 lg:ml-20">
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                <LuSparkles/>AI Powered 
              </div>
             </div> 

             <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-medium mb-8 leading-tight">
              Ace Interviews with <br/>
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                AI-Powered
              </span>{" "}
              Learning
             </h1>
             </div>

             <div className="w-full lg:w-1/2">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way.
                From preparation to mastery - your ultimate interview toolkit is here.
              </p>

              <button 
              className="bg-black text-base font-semibold text-white px-8 py-3 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              onClick= {handleCTA}
              >
                Get Started
              </button>

              </div>
            </div>
           </div> 
    </div>

    <div className="w-full relative z-10 -mt-80">
      <div className="w-full px-4 md:px-8">
        <section className="flex items-center justify-center">
          <img src={HERO_IMG} alt="Hero Image" className="w-full max-w-3xl rounded-2xl shadow-2xl"/>
        </section>
      </div>
    </div>

    <div className="w-full bg-[#FFFCEF] mt-20">
  <div className="w-full px-4 md:px-8 pt-12 pb-16">
    <section>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900">
        Features That Make You Shine
      </h2>

      <div className="flex flex-col items-center gap-12">
        {/* First 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {APP_FEATURES.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200 group"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* remaining two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {APP_FEATURES.slice(3, ).map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200 group"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</div>

<footer className="bg-gray-900 text-white py-8 mt-20">
  <div className="w-full px-4 md:px-8 text-center">
    <p className="text-gray-400">© 2024 Interview Prep AI. Happy Coding! 🚀</p>
  </div>
</footer>

<Modal
  isOpen={openAuthModal}
  onClose={() => {
    setOpenAuthModal(false);
    setCurrentPage("login");
  }}
  hideHeader
  >
    <div>
      {currentPage === "login" && (
        <Login setCurrentPage={setCurrentPage}/>

      )}
      {currentPage === "signup" && (
        <SignUp setCurrentPage={setCurrentPage}/>

      )}
    </div>

</Modal>


    </>
  );
};

export default LandingPage;
