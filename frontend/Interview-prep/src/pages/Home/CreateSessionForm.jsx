import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Input from '../../components/Inputs/Input';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';
import axiosinstance from '../../utils/axiosinstance';
import API_PATHS from '../../utils/apiPaths';

// import GENERATE_QUESTIONS from '/api/ai/generate-questions';


const CreateSessionForm = () => {
    const [formData, setFormData] = useState({
    role: "",
    topicsToFocus: "",
    experience: "",
    description: "",
  });   

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (key,value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  const handleCreateSession = async (e) => {
    e.preventDefault();

    const { role, experience, topicsToFocus } = formData;

    if (!role || !experience || !topicsToFocus) {
      setError("Please fill all the required fields.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Call ai api to generate questions
      const aiResponse = await axiosinstance.post(
      API_PATHS.AI.GENERATE_QUESTIONS,
      {
        role,
        experience,
        topicsToFocus,
        numberOfQuestions: 10,

      }  
      );

       console.log("AI Response raw (frontend):", aiResponse.data);


      // should be array like [{questions, answers}, ...]
      const generatedQuestions = aiResponse.data;

       console.log("Generated Questions being saved:", generatedQuestions);
      
      const response = await axiosinstance.post(API_PATHS.SESSIONS.CREATE, {
        ...formData,
        questions: generatedQuestions,
      });

      if (response.data?.session?._id){
        navigate(`/interview-prep/${response.data?.session?._id}`)
      }
    } catch (error) {
      console.error("Create session error:", error);
  console.error("Backend response:", error.response?.data);  
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else{
        setError("Something went wrong. Please try again");
      }
    } finally{
      setIsLoading(false);
    }
  };
  return <div className='w-[90vw] md:w-[35vw] px-8 py-8 mx-4 my-2 flex flex-col justify-center'>
    <h3 className='text-lg font-semibold text-black'>
        Start a New Interview Journey
    </h3>
    <p className='text-xs text-slate-700 mt-[5px] mb-3'>
        Fill out a few quick details and unlock your personalized set of interview questions.
    </p>

    <form className='flex flex-col gap-4 mt-4' onSubmit={handleCreateSession}>
        <Input 
            value={formData.role}
            onChange={({target}) => handleChange("role", target.value)}
            label="Target Role "
            placeholder="(e.g., Frontend developer, UI/UX designer, etc.)"
            type="text"
            />
        <Input
            value={formData.experience}
            onChange={({target}) => handleChange("experience", target.value)}
            label="Years of Experience "
            placeholder="(e.g., 1 year, 3 years, 5+ years)"
            type="number"
            />
        <Input
            value={formData.topicsToFocus}
            onChange={({target}) => handleChange("topicsToFocus", target.value)}
            label="Topics to Focus On "
            placeholder="(Comma-separated, e.g., React, Node.js, MongoDB)"
            type="text"
            />
        <Input
            value={formData.description}
            onChange={({target}) => handleChange("description", target.value)}
            label=" Description "
            placeholder="(Any specific goals or notes for this session)"
            type="text"
            />

        {error && <p className="text-red-500 text-xs pb-2.5"> {error}</p>}

        <button type="submit" className="btn-primary w-full mt-2" disabled={isLoading}>
         {isLoading && <SpinnerLoader/>} Create Session
        </button>
    </form>
  </div>
  
};

export default CreateSessionForm;
