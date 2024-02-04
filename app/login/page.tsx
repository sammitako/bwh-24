import Image from "next/image";
import googleLogo from "@/public/google.png";
import githubLogo from "@/public/github.png";
import {
  CredentialsSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
  RegisterButton,
} from "../components/authButtons";
import styles from "./styles/login.css";
import Link from 'next/link';


export default async function SignInPage() {


  return (
   
     <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ background: "linear-gradient(180deg, rgba(0, 17, 43, 1) 18%, rgba(2, 30, 75, 0.47805059523809523) 100%)" }}>
      <div className= "flex min-h-screen flex-col items-center justify-between p-20 rounded-lg"style={{ background: "white", minHeight:"35vh" }}>
      

      <div className={styles.grid}>
      <h1 className="text-3xl font-bold mb-4 text-center"
      >Sign in</h1>
      <GoogleSignInButton />
      <GithubSignInButton />
      <h1 className="text-center text-gray-600 p-4">
        OR
      </h1>
      <CredentialsSignInButton/>
      <RegisterButton/>
      

      </div>
 </div>
    </main>
   
  )};
