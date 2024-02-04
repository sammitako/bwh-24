"use client";

import Image from "next/image";
import googleLogo from "@/public/google.png";
import githubLogo from "@/public/github.png";
import { signIn } from "next-auth/react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <Button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-10 px-6 mt-2 text-xl transition-colors  bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span className="ml-4">Continue with Google</span>
    </Button>
  );
}

export function GithubSignInButton() {
  const handleClick = () => {
    signIn("github");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-10 px-6 mt-2 text-xl transition-colors  bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={githubLogo} alt="Github Logo" width={20} height={20} />
      <span className="ml-4">Continue with Github</span>
    </button>
  );
}

export function CredentialsSignInButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // signIn();
    setClicked(true);
  };

  return !clicked ? (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <span className="ml-4">Continue with Email</span>
    </button>
  ) : (
    <div className="w-full mt-3 text-xl text-black font-semibold flex flex-col">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <Link
        href="/"
        className="flex items-center justify-center w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-gray-600"
      >
        Login
      </Link>
    </div>
  );
}

export function RegisterButton() {
  const handleClick = () => {};

  return (
    <Link href="/register">
      <button
        onClick={handleClick}
        className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <span className="ml-4">Register</span>
      </button>
    </Link>
  );
}
