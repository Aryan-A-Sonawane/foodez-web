// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [step, setStep] = useState(1); // 1: Form, 2: OTP
//   const [prn, setPrn] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSendOTP = (e) => {
//     e.preventDefault();
//     // Mock OTP sending
//     if (prn && mobile.match(/^\d{10}$/)) {
//       setMessage("OTP sent to your number! Enter it below.");
//       setStep(2);
//     } else {
//       setMessage("Please enter a valid PRN and 10-digit mobile number.");
//     }
//   };

//   const handleVerifyOTP = (e) => {
//     e.preventDefault();
//     const otpValue = otp.join("");
//     // Mock OTP verification (e.g., check if all digits are "1" for simplicity)
//     if (otpValue === "1111") {
//       setMessage("Registered successfully! Now log in and start ordering.");
//       setStep(3); // Move to success step
//     } else {
//       setMessage("Invalid OTP. Try '1111' for testing.");
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value.slice(0, 1); // Limit to 1 character
//     setOtp(newOtp);
//     if (value && index < 3) document.getElementById(`otp-${index + 1}`).focus();
//   };

//   return (
//     <div className="min-h-screen bg-[#ffe5ec] flex items-center justify-center px-4 py-6">
//       <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden">
//         <div className="relative">
//           <div className="bg-[#f87171] pt-8 pb-6 text-white z-10 relative">
//             <h2 className="text-2xl font-bold mb-1 ml-5">Register</h2>
//             <p className="text-lg ml-5">Start Pre-Ordering Now</p>
//           </div>
//           <svg
//             className="w-full h-12 transform rotate-180"
//             viewBox="0 0 500 150"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M0.00,49.98 C150.00,150.00 349.91,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//               fill="#f87171"
//             ></path>
//           </svg>
//         </div>
//         <form
//           className="p-8 space-y-6 -mt-6 relative z-10"
//           onSubmit={
//             step === 1 ? handleSendOTP : step === 2 ? handleVerifyOTP : null
//           }
//         >
//           {step === 1 && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   PRN: <span className="text-gray-500">your PRN here</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={prn}
//                   onChange={(e) => setPrn(e.target.value)}
//                   className="w-full border border-[#f8c8dc] px-4 py-2 rounded mt-1 focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Mobile:{" "}
//                   <span className="text-gray-500">your number here</span>
//                 </label>
//                 <input
//                   type="tel"
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                   className="w-full border border-[#f8c8dc] px-4 py-2 rounded mt-1 focus:outline-none"
//                   required
//                   pattern="[0-9]{10}"
//                   title="Please enter a 10-digit mobile number"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#f87171] text-white font-bold py-2 px-4 rounded hover:bg-[#fca5a5] transition"
//               >
//                 Send OTP
//               </button>
//             </>
//           )}
//           {step === 2 && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   OTP
//                 </label>
//                 <div className="flex flex-col space-y-2">
//                   {otp.map((digit, index) => (
//                     <input
//                       key={index}
//                       id={`otp-${index}`}
//                       type="text"
//                       value={digit}
//                       onChange={(e) => handleOtpChange(index, e.target.value)}
//                       className="w-10 h-10 border border-[#f8c8dc] text-center rounded focus:outline-none"
//                       maxLength="1"
//                       required
//                     />
//                   ))}
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#f87171] text-white font-bold py-2 px-4 rounded hover:bg-[#fca5a5] transition"
//               >
//                 Verify OTP
//               </button>
//             </>
//           )}
//           {step === 3 && (
//             <>
//               <p className="text-center text-sm text-gray-600 mt-4">
//                 {message}
//               </p>
//               <button
//                 disabled
//                 className="w-full bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
//               >
//                 Log In
//               </button>
//               <p className="text-center text-sm text-gray-500 mt-4">
//                 Already registered?{" "}
//                 <a href="/login" className="text-[#f87171] font-semibold">
//                   Go to Login
//                 </a>
//               </p>
//             </>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-screen bg-green-600 flex flex-col justify-between items-center text-white p-6">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold tracking-widest">FOODIE</h1>
        <img
          src="/assets/food-illustration.png" // Replace with actual path
          alt="Healthy food"
          className="w-72 h-72 mx-auto my-8"
        />
        <p className="text-xl font-semibold">Food for You!</p>
      </div>

      <div className="w-full max-w-sm space-y-4 mb-12">
        <Link to="/login">
          <button className="w-full bg-white text-green-700 py-2 rounded-lg font-bold">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="w-full border border-white py-2 rounded-lg font-bold">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
