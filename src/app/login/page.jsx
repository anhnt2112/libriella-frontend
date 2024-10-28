'use client'

import TextLogo from "@/assets/TextLogo.png"
import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="w-96 gap-5 flex flex-col">
        <div className="w-full border border-slate-400 h-fit px-6 rounded-sm flex flex-col items-center">
          {/* LOGO */}
          <Image src={TextLogo} alt="Text logo" className="my-16" /> 
          {/* Login Form */}
          <input type="text" id="username" placeholder="Username" required className="px-2 py-1 my-1 w-3/4 border-2 rounded-md bg-gray-200 border-slate-400 text-black font-light text-base" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" id="password" placeholder="Password" required className="px-2 py-1 my-1 w-3/4 border-2 rounded-md bg-gray-200 border-slate-400 text-black font-light text-base" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-3/4 bg-blue-600 hover:bg-blue-700 text-base text-white font-bold px-2 py-1 rounded-md my-6">Log in</button>
          {/* Divider */}
          {/* Other Log In */}
        </div>
        <div className="w-full border border-slate-400 h-fit px-6 py-4 rounded-sm text-black font-medium text-center">
          Don&apos;t have an account? <a href="/signup" className="text-blue-600">Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;