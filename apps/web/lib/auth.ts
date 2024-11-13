"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";
import { FormState, SignupFormSchema } from "./type";

// export const signup = validatedAction(
//   SignupFormSchema,
//   async (data, formData) => {}
// );

export const signup = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const validationFields = SignupFormSchema.safeParse(formData);
  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });
  if (response.ok) {
    redirect("/auth/signin");
  } else {
    return {
      message:
        response.status === 409
          ? "The user is already existed!"
          : response.statusText,
    };
  }
};
