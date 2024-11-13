"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import React from "react";

const SignUpForm = () => {
  const onSubmit = (e: any) => {
    const formData = Object.fromEntries(new FormData(e.target).entries());
  };
  return (
    <form className="w-full">
      <div className="flex flex-col gap-2 ">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="John Doe" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="john@example.com" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*******"
          />
        </div>
        <SubmitButton>Signup</SubmitButton>
      </div>
    </form>
  );
};

export default SignUpForm;
