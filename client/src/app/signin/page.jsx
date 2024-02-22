"use client"

import React, {useState} from 'react';
import Link from 'next/link';
import {
    RiMailLine,
    RiLockLine,
    RiEyeLine,
    RiEyeOffLine,
    RiGoogleFill,
    RiReplyLine,
  } from "react-icons/ri";

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-secondary-900/90 opacity-90 md:flex-row flex-col flex  border-[1px] border-white/10   rounded-3xl  xl:w-[900px] lg:w-[90%]  sm:w-[100%] w-[100%] items-center justify-center">
      <div className=" md:w-[40%] w-[100%] flex-1 flex flex-col items-center justify-center">
        <h2 className="font-rocksalt text-[40px] text-white/90 mb-4">
          Sign In
        </h2>
        <button
          className="w-[50%] border-[1px] mb-2 border-primary hover:bg-primary/90 hover:text-white text-primary rounded-2xl flex gap-x-2 items-center justify-center py-2 px-5"
        >
          <RiGoogleFill /> Enter with Google
        </button>
        <p className="mb-4">Or Sign in with your account</p>

        <form onSubmit="" className="mb-7 md:w-[60%] w-[90%]">
          <div className="relative mb-3">
            <RiMailLine className="absolute left-2 top-4 text-white/80" />
            <input
              type="email"
              name="email"
              className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none rounded-2xl mb-4"
              placeholder="E-mail"
            />
          </div>
          <div className="relative mb-4">
            <RiLockLine className="absolute left-2 top-4 text-white/80" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="py-3 px-8 bg-secondary-100 w-full outline-none rounded-2xl mb-4 "
              placeholder="Password"
            />
            {showPassword ? (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary/90 opacity-80  cursor-pointer font-bold text-white text-[18px] w-full py-3 px-4 rounded-lg hover:bg-primary/70 transition-colors"
            >
              Login
            </button>
          </div>
          <span></span>
        </form>
        <p
          className="text-primary/80 mb-6 hover:text-primary cursor-pointer"
        >
          Have you forgotten the password?
        </p>
        <div className=" border-transparent border-r-[1px] border-r-white/10 flex flex-col items-center justify-center text-center px-8 ">
          <p className="text-primary/80 mb-6">
            Don't have an account? Sign up free
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn