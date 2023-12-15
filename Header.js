import React from 'react'
import logo from '../src/Assets/Medic Plus.png'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";


    const Header = () => {
    return (
        <header className='fixed shadow-md w-full h-20 bg-gradient-to-r from-cyan-500 to-blue-500   '>
            {/*desktop*/}

            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                <div className='w-20 '>
                 <img src={logo} />
            </div>
            </Link>
            <div className='flex gap-24 text-lg text-slate-600 '>
               
                    <Link to={""}>HOME</Link>
                    <Link to={"find doctor"}>FIND DOCTOR</Link>
               

            </div>
                <div className=' flex items-center h-28 w-28 text-3xl gap-2 mr-3'>
                    <div className="border-2 border-solid border-slate-600 p-1 rounded-full cursor-pointer">
                        <FaUserCircle /> 
                    </div>
                    <div className='text-xl'>
                    <Link to={"login"}>LOGIN</Link>
                    </div>

                </div>

        </div>

        {/*mobile*/}
    </header>
  )
}

export default Header