import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log(data)

  const handlesPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handlesConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange=(e)=>{
    const { name,value}=e.target
    setData((preve)=>
    {
      return{
        ...preve,
        [name]:value
      }
    }
    )
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const {firstname,email,password,confirmpassword}=data
    if(firstname&&email&&password&&confirmpassword){
      if(password===confirmpassword){
        alert("successfull")
      }
      else{
        alert("Password and Confirm Password not same")
      }
    }
    else{
      alert("PLEASE FILL ALL THE FIELDS")
    }
  }

  return (
    <div >
      <div className="p-3 md:p-4 flex-auto">
        <div className="w-full max-w-sm bg-slate-50 m-auto flex items-center flex-col p-4 ">
          <h1 className=" text-center text-2xl front-bold">REGISTER</h1>
          <br />

          <div className="text-7xl">
            <FaUserCircle />
          </div>

          <div>
            <form className="w-full py-3 " onSubmit={handleSubmit}>
              <label htmlFor="firstname">First Name</label>
              <input
                type={"text"}
                id="firstname"
                name="firstname"
                className="mt-1 mb-2  w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
                value={data.firstname}
                onChange={handleOnChange}
              />
              <label htmlFor="lastname">Last Name</label>
              <input
                type={"text"}
                id="lastname"
                name="lastname"
                className="mt-1 mb-2  w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
                value={data.lastnametname}
                onChange={handleOnChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type={"email"}
                id="email"
                name="email"
                className="mt-1 mb-2  w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
                value={data.email}
                onChange={handleOnChange}
              />

              <label htmlFor="password">password</label>
              <div className="flex px-2 py-1  bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-1 focus-within:outline-blue-300">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full bg-slate-200 border-none outline-none "
                  value={data.password}
                  onChange={handleOnChange}
                />
                <span
                  className="flex text-xl cursor-pointer"
                  onClick={handlesPassword}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <label htmlFor="confirmpassword">Confirm Password</label>
              <div className="flex px-2 py-1  bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-1 focus-within:outline-blue-300">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmpassword"
                  name="confirmpassword"
                  className="w-full bg-slate-200 border-none outline-none "
                  value={data.confirmpassword}
                onChange={handleOnChange}
                />
                <span
                  className="flex text-xl cursor-pointer"
                  onClick={handlesConfirmPassword}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div>
                <button type="submit" className="w-full max-w-[120px] mt-4 ml-28 bg-blue-500 hover:bg-blue-200 text-cyan-100 rounded-full cursor-pointer">
                  Register
                </button>
              </div>
            </form>
            <p className="ml-20">
              Already have account ?{" "}
              <Link to={"/login"} className="text-blue-600 underline">
                login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
