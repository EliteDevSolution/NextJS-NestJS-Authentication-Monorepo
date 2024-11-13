import React, { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-disabled={pending}>
      {children}
    </Button>
  );
};

export default SubmitButton;
