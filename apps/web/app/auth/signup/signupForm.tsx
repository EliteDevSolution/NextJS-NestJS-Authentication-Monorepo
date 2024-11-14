"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signup } from "@/lib/auth";
import React from "react";
import { useFormState } from "react-dom";

const SignUpForm = () => {
  const [state, action] = useFormState(signup, null);

  return (
    <form action={action} className="w-full">
      <div className="flex flex-col gap-2 ">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="John Doe" />
        </div>
        {state?.error?.name && (
          <p className="text-sm text-red-500">{state.error?.name}</p>
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
          <div className="text-sm text-red-500">
            <p>Password must be:</p>
            <ul>
              {state.error?.password.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
          </div>
        )}
        <SubmitButton>Signup</SubmitButton>
      </div>
    </form>
  );
};

export default SignUpForm;
