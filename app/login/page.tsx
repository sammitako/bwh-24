import Image from "next/image";
import googleLogo from "@/public/google.png";
import githubLogo from "@/public/github.png";
import {
  GithubSignInButton,
  GoogleSignInButton,
} from "../components/authButtons";
// import { getServerSession } from "next-auth";
// import { authConfig } from "@/lib/auth";
// import { redirect } from "next/navigation";
// import { CredentialsForm } from "@/components/credentialsForm";
// import { getCsrfToken } from "next-auth/react";
import { Button } from "@/components/ui/button";
import styles from "./styles/login.css";

export default async function SignInPage() {
  // const session = await getServerSession(authConfig);

  // console.log("Session: ", session);

  // if (session) return redirect("/timeline");

  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ background: "linear-gradient(180deg, rgba(0, 17, 43, 1) 18%, rgba(2, 30, 75, 0.47805059523809523) 100%)" }}>
     
      

      <div className={styles.grid}>
      <h1>Sign in</h1>
      <h3>Enter your details to log in</h3>
      <GoogleSignInButton />
      <GithubSignInButton />
      <h1>
        Or
      </h1>
      </div>

    </main>
  )};
