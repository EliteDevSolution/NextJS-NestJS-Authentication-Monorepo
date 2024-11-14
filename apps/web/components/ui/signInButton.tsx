import { getSession } from "@/lib/session";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignInButton = async () => {
  const session = await getSession();
  return (
    <div className="flex items-center gap-2 ml-auto">
      {!session || !session.user ? (
        <>
          <Link href={"/auth/signin"}>Sign In</Link>
          <Link href={"/auth/signup"}>Sign Up</Link>
        </>
      ) : (
        <>
          <a
            href="#"
            className="block max-w-sm p-2 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <p>{session.user.name}</p>
          </a>

          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            href={"/api/auth/signout"}
          >
            <LogOut className="mr-2" />
            Sign Out
          </a>
        </>
      )}
    </div>
  );
};

export default SignInButton;
