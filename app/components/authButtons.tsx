"use client";

import Image from "next/image";
import googleLogo from "@/public/google.png";
import githubLogo from "@/public/github.png";
// import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";


export function GoogleSignInButton() {
  const handleClick = () => {
    // signIn("google");
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
    // signIn("github");
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
  const handleClick = () => {
    // signIn();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <span className="ml-4">Continue with Email</span>
    </button>
  );
}