import React from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { AnimatePresence, motion } from 'framer-motion';
import { LuCircleAlert, LuListCollapse } from 'react-icons/lu';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';
import SkeletonLoader from '../../components/Loader/SkeletonLoader';
import {toast} from 'react-hot-toast';
import { useState } from 'react';
import { useEffect } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import RoleInfoHeader from './components/RoleInfoHeader';
import axiosinstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import QuestionCard from '../../components/Cards/QuestionCard';
// import AIResponsePreview from './components/AIResponsePreview';
// import Drawer from '../../components/Drawer';
import AIResponsePreview from './components/AIResponsePreview';
import Drawer from '../../components/Drawer';






const InterviewPrep = () => {

  const { sessionId } = useParams();

  const [sessionData, setSessionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [openLeanMoreDrawer, setOpenLearnMoreDrawer] = useState(false);
  const [explanation, setExplanation] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateLoader, setIsUpdateLoader] = useState(false);

  // Fetch session data by session id
  const fetchSessionDetailsById = async() => {
    try {
      const response = await axiosinstance.get(
      API_PATHS.SESSIONS.GET_ONE(sessionId)
    );

    if (response.data && response.data.session){
      console.log('Session data received:', response.data.session);
      console.log('Questions array:', response.data.session.questions);
      setSessionData(response.data.session);
    }
    } catch (error) {
      console.error("Error fetching session details:", error);
    }
  };

  // Generate explaination for a question
  const generateConceptExplaination = async(question) => {
    try {
      console.log('Generating explanation for question:', question);
      setErrorMsg("");
      setExplanation(null);

      setIsLoading(true);
      setOpenLearnMoreDrawer(true);

      const response = await axiosinstance.post(
        API_PATHS.AI.GENERATE_EXPLAINATION,
        {
          question,
        }
      );

      console.log('Explanation response:', response.data);
      if(response.data){
        setExplanation(response.data);
      }

    } catch (error) {
      setExplanation(null);
      setErrorMsg("Failed to generate explanation, Try again later");
      console.error("Error generating explanation:", error);
    }finally{
      setIsLoading(false);
    }
  };

  // Toggle pin or unpin a question
  const toggleQuestionPinStatus = async(questionId) => {
    try {
      const response = await axiosinstance.post(
        API_PATHS.QUESTION.PIN(questionId)
      );
      
      if (response.data) {
        fetchSessionDetailsById(); // Refresh data
      }
    } catch (error) {
      console.error("Error toggling pin:", error);
    }
  };  

  // Add more questions to session
  const uploadMoreQuestions = async() => {
    
  };

  useEffect(() => {
   if (sessionId) {
     fetchSessionDetailsById();
   }
   return () => {};
  }, []);
  




  return (
    <DashboardLayout>

      <RoleInfoHeader
      role={sessionData?.role || ""}
      topicsToFocus={sessionData?.topicsToFocus || ""}
      experience={sessionData?.experience || "-"}
      questions={sessionData?.questions?.length || "-"}
      description={sessionData?.description || ""}
      lastUpdated={
        sessionData?.updatedAt
          ? moment(sessionData?.updatedAt).format("DD MMM YYYY")
          : "-"
      }/>

      <div className="">
        <h2 className ="">Interview Q & A</h2>
          <div className="">
            <div className={`col-span-12 ${
              openLeanMoreDrawer ? "md:col-span-7" : "md:col-span-8"
            }`}>

              <AnimatePresence>
                {sessionData?.questions?.map((data, index) => {
                   console.log("Raw question object:", data);
                   console.log("Available keys:", Object.keys(data));

                  return (
                    <motion.div
                    key={data._id || index}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.95}}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1,
                      damping: 20,
                    }}
                    layout
                    layoutId={`question-${data._id || index}`}
                    >
                      <>
                      <QuestionCard
                      question={data?.question}
                      answer={data?.answer}
                      onLearnMore={() =>
                        generateConceptExplaination(data.question || 'Sample question for explanation')
                      }
                      isPinned={data?.isPinned }
                      onTogglePin={() => toggleQuestionPinStatus(data._id)}
                      />

                     
                     

                       </>
                    </motion.div>

                  )
                })}
              </AnimatePresence>
        
      </div>
        
      </div>
      </div>
      
      <Drawer
        isOpen={openLeanMoreDrawer}
        onClose={() => setOpenLearnMoreDrawer(false)}
        title={!isLoading && explanation?.title}>
          {errorMsg && (
            <p className="flex gap-2 text-sm text-amber-600 font-medium">
              <LuCircleAlert className='mt-1'/> {errorMsg}
            </p> 
          )}
          {isLoading && <SkeletonLoader/>}
          {!isLoading && explanation && (
              <AIResponsePreview content = {explanation?.explaination}/>
          )}
        </Drawer>
      
       </DashboardLayout>
  )
}

export default InterviewPrep
