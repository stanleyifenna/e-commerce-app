import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="bg-black min-h-screen grid place-items-center">
        <button onClick={() => signIn("google")} className="bg-white px-8 py-4 flex gap-2 items-center">
            <FcGoogle size={30} /> Sign in with Google
        </button>
    </div>
  )
}

export default Login