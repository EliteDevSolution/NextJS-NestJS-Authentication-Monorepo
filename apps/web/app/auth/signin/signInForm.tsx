"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signIn } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

const SignInForm = () => {
  const [state, action] = useFormState(signIn, null);

  return (
    <form action={action} className="w-full">
      <div className="flex flex-col gap-2 ">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}

        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="john@example.com" />
        </div>
        {state?.error?.email && (
          <p className="text-sm text-red-500">{state.error?.email}</p>
        )}

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*******"
          />
        </div>
        {state?.error?.password && (
          <p className="text-sm text-red-500">{state.error.password}</p>
        )}
        <Link className="text-sm underline" href="#">
          Forgot your password?
        </Link>

        <SubmitButton>Sign In</SubmitButton>
      </div>
    </form>
  );
};

export default SignInForm;
