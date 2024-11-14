import React from "react";
import SignInButton from "./signInButton";
import Link from "next/link";

const HeaderBar = () => {
  return (
    <div className="p-4 shadow flex items-center font-semibold gap-4 bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/profile"}>Profile</Link>
      <SignInButton />
    </div>
  );
};

export default HeaderBar;
