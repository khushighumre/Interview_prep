// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({setCurrentPage}) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   // Handle login from submit
//   const handleLogin = async (e) => {
//     e.preventDefault();
//   };

//   return <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
//     <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
//     <p className="text-xs text-slate-700 mt-[5px] mb-6" >
//       Pleae enter your details to log in
//     </p>
//     <form onSubmit={handleLogin}>
//       <Input 
//       value={email}
//       onChange={({target}) => setEmail(target.value)}
//       label="Email Adress"
//       placeholder="john@example.com"
//       type="text"/>

//       <Input 
//       value={password}
//       onChange={({target}) => setPassword(target.value)}
//       label="Password"
//       placeholder="Min 8 charachters"
//       type="password"/>


//       {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

//       <button type="submit" className="btn-primary">
//         LOGIN
//       </button>

//       <p className="text-[13px] text-slate-800 mt-3">
//         Don't have an account?{" "}
//         <button 
//         className="font-medium text-primary underline cursor-pointer"
//         onClick={()=> {
//           setCurrentPage("signup");
//         }}>
//           SignUp

//         </button>
//       </p>

//       </form>
//   </div>
  
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input.jsx";
 // ✅ Ensure the path is correct

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic here (API call, validation, etc.)
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to log in
      </p>
      
      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary">
          LOGIN
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{' '}
          <button
            type="button"
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage('signup')}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
