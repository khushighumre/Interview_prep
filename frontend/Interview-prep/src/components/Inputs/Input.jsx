// import React from 'react';
// import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';
// a
// const Input = ({value,onChange,label,placeholder,type}) => {
//     const [showPassword, setShowPassword] = useState(false);;

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };
//   return (
//     <div>
//       <label className="">{label}</label>

//       <div className="">
//         <input type={
//             type == "password" ? (showPassword ? "text" : "password") : type
//         }
//         placeholder={placeholder}
//          className=""
//          value={value}
//          onChange={(e) => onChange(e)}/>
        
//         {type === "password" && (
//             <>
//             {showPassword ? (
//                 <FaRegEye size={22} className="" onClick={() => toggleShowPassword()} />
//                 ) : (
//                     <FaRegEyeSlash size={22} className="" onClick={() => toggleShowPassword()} />
                    
//         )}
//         </>
//       </div>
//     </div>
//   )
// }

// export default Input

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>

      <div className="input-box">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
