import Link from "next/link";
import React from "react";
import SignInForm from "./signInForm";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center gap-3">
      <h1 className="text-center text-2xl font-bold mb-2">Sign In Page</h1>
      <SignInForm />
      <div className="flex justify-between text-sm gap-1">
        <p>Don't have an account? </p>
        <Link className="text-sm underline" href="/auth/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
